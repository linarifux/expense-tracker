import _ from "lodash";

export function getSum(transaction, type) {
  let sum = _(transaction)
    .groupBy("type")
    .map((obj, key) => {
      if (!type) return _.sumBy(obj, "amount");
      return {
        type: key,
        color: obj[0].color,
        total: _.sumBy(obj, "amount"),
      };
    })
    .value();
  return sum;
}
export function getLabels(transaction) {
  let amountSum = getSum(transaction, "type");
  let Total = _.sum(getSum(transaction));
  let percent = _(amountSum)
    .map((objs) => _.assign(objs, { percent: (100 * objs.total) / Total }))
    .value();
  return percent;
}

export function chartData(transaction, custom) {
    let bg = _.map(transaction, a=> a.color)
    bg = _.uniq(bg)
    console.log(bg);
    let dataValue = getSum(transaction)

  const config = {
    data: {
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: bg,
          hoverOffset: 4,
          borderRadius: 30,
          spacing: 10,
        },
      ],
    },
    options: {
      cutout: 115,
    },
  };
  return custom ?? config
}

export function getTotal(transaction){
  return _.sum(getSum(transaction))
}