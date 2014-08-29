define(function (require) {
  return function ColumnLayoutFactory(d3, Private) {

    var chartSplit = Private(require('components/vislib/components/layouts/splits/column_chart/chart_split'));
    var yAxisSplit = Private(require('components/vislib/components/layouts/splits/column_chart/y_axis_split'));
    var xAxisSplit = Private(require('components/vislib/components/layouts/splits/column_chart/x_axis_split'));
    var chartTitleSplit = Private(require('components/vislib/components/layouts/splits/column_chart/chart_title_split'));

    return function (el, data) {
      if (!el || !data) {
        throw new Error('Both an el and data need to be specified');
      }

      return [
        {
          parent: el,
          type: 'div',
          class: 'vis-wrapper',
          datum: data,
          children: [
            {
              parent: 'vis-wrapper',
              type: 'div',
              class: 'y-axis-col-wrapper',
              children: [
                {
                  parent: 'y-axis-col-wrapper',
                  type: 'div',
                  class: 'y-axis-col',
                  children: [
                    {
                      parent: 'y-axis-col',
                      type: 'div',
                      class: 'y-axis-title'
                    },
                    {
                      parent: 'y-axis-col',
                      type: 'div',
                      class: 'y-axis-chart-title',
                      splits: chartTitleSplit
                    },
                    {
                      parent: 'y-axis-col',
                      type: 'div',
                      class: 'y-axis-div-wrapper',
                      splits: yAxisSplit
                    }
                  ]
                },
                {
                  parent: 'y-axis-col-wrapper',
                  type: 'div',
                  class: 'y-axis-spacer-block'
                }
              ]
            },
            {
              parent: 'vis-wrapper',
              type: 'div',
              class: 'vis-col-wrapper',
              children: [
                {
                  parent: 'vis-col-wrapper',
                  type: 'div',
                  class: 'chart-wrapper',
                  splits: chartSplit
                },
                {
                  parent: 'vis-col-wrapper',
                  type: 'div',
                  class: 'x-axis-wrapper',
                  children: [
                    {
                      parent: 'x-axis-wrapper',
                      type: 'div',
                      class: 'x-axis-div-wrapper',
                      splits: xAxisSplit
                    },
                    {
                      parent: 'x-axis-wrapper',
                      type: 'div',
                      class: 'x-axis-chart-title',
                      splits: chartTitleSplit
                    },
                    {
                      parent: 'x-axis-wrapper',
                      type: 'div',
                      class: 'x-axis-title'
                    }
                  ]
                }
              ]
            },
            {
              parent: 'vis-wrapper',
              type: 'div',
              class: 'legend-col-wrapper'
            },
            {
              parent: 'vis-wrapper',
              type: 'div',
              class: 'k4tip'
            }
          ]
        }
      ];
    };
  };
});