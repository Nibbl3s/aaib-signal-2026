"""Reproduce planning calculations only. Does not call a model or change raw evidence."""
from decimal import Decimal as D, ROUND_HALF_UP
import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
def money(x):
    return str(D(x).quantize(D('.01'), rounding=ROUND_HALF_UP))

def calculate(name, daily, fixed, upfront, budget):
    daily, fixed, upfront, budget = map(D, (daily, fixed, upfront, budget))
    queries = daily * 250
    review = queries * D(15)/3600*30
    errors = queries * D('.15')*30/3600*30
    subtotal = fixed+review+errors
    total = subtotal*D('1.15')
    recurring = fixed-upfront+review+errors
    # Northwind adopts the same 60s manual baseline only as an added sensitivity assumption.
    manual = queries*D('.5')
    monthly = []
    for month, scale in [(1,1),(6,2),(12,3)]:
        n = daily*scale*250/12
        monthly.append(dict(month=month,daily_enquiries=int(daily*scale),queries=str(n),
                            review=money(daily*scale*250*D('.125')/12),correction=money(daily*scale*250*D('.0375')/12),
                            allocated_first_year_total=money((fixed/12+n*D('.1625'))*D('1.15')),
                            recurring_with_reserve=money(((fixed-upfront)/12+n*D('.1625'))*D('1.15'))))
    growth = daily*250/12*(5+6*2+3)  # Months 1–5=1x, 6–11=2x, 12=3x.
    growth_total = (fixed+growth*D('.1625'))*D('1.15')
    net_monthly = (manual-recurring)/12
    net_reserved = (manual-recurring*D('1.15'))/12
    # Annual growth payback: upfront at t0, net recurring benefit at month ends.
    balance = -upfront*D('1.15'); growth_payback = None
    for month in range(1,13):
        scale = 1 if month<6 else 2 if month<12 else 3
        n = daily*scale*250/12
        benefit = n*D('.5')-((fixed-upfront)/12+n*D('.1625'))*D('1.15')
        if balance<0 and balance+benefit>=0 and growth_payback is None:
            growth_payback = str(D(month-1)+(-balance)/benefit)
        balance += benefit
    return dict(name=name,queries=int(queries),fixed=money(fixed),upfront=money(upfront),
                annual_review=money(review),annual_correction=money(errors),subtotal=money(subtotal),
                contingency=money(subtotal*D('.15')),total=money(total),
                budget_remaining_from_rounded_total=money(budget-D(money(total))),
                manual_baseline=money(manual),net_savings=money(manual-D(money(total))),
                roi_percent=str((manual-total)/total*100),
                recurring_annual_before_reserve=money(recurring),
                payback_months_base=str(upfront/net_monthly),
                payback_months_with_15pct_reserve=str(upfront*D('1.15')/net_reserved),
                model_correct_query_cost=str(total/(queries*D('.85'))),
                hypothetical_all_reviewed_correct_query_cost=str(total/queries),
                monthly=monthly,growth_queries=str(growth),growth_total=money(growth_total),
                growth_budget_remaining=money(budget-D(money(growth_total))),
                growth_payback_months_with_reserve=growth_payback,
                growth_roi_percent=str((growth*D('.5')-growth_total)/growth_total*100))

def main():
    results=[calculate('BelSupply',100,5640,4800,15000),calculate('Northwind',300,28700,23900,50000)]
    assert results[0]['total']=='11157.88'
    assert results[1]['total']=='47020.63'
    assert results[0]['growth_total']=='14272.46'
    assert results[1]['growth_total']=='56364.38'
    projection=[]
    for calls in [100,1000,10000]:
        projection.append(dict(daily_calls=calls,annual_calls=calls*250,
                               monthly_input_tokens=str(D(calls)*250/12*D('130.3')),
                               monthly_output_tokens=str(D(calls)*250/12*D('3.4')),
                               annual_input_tokens=str(D(calls)*250*D('130.3')),
                               annual_output_tokens=str(D(calls)*250*D('3.4')),
                               external_token_charge_eur='0.00'))
    data=dict(financial_assumptions_date='2026-11-27',rounding='Decimal ROUND_HALF_UP, full precision until final display',
              assumptions='Financial planning only; error rate 15% is not measured production accuracy. All review/error time is paid by the company. Northwind 60s manual baseline is an added sensitivity assumption.',
              scenarios=results,token_projections=projection)
    (HERE/'financial-checks.json').write_text(json.dumps(data,indent=2)+'\n')
    print(json.dumps(data,indent=2))

if __name__=='__main__': main()
