/** @format */

am5.ready(function () {
  var root = am5.Root.new("chartdiv");
  root.rtl = true;

  root.setThemes([am5themes_Animated.new(root)]);


  var chart = root.container.children.push(
    am5percent.PieChart.new(root, {
      startAngle: 180,
      endAngle: 360,
      layout: root.verticalLayout,
      innerRadius: am5.percent(50),
      ticks: false,
      tooltip: am5.Tooltip.new(root, {
        forceHidden: true,
      }),
    })
  );

  // Create series
  // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
  // start and end angle must be set both for chart and series
  var series = chart.series.push(
    am5percent.PieSeries.new(root, {
      startAngle: 180,
      endAngle: 360,
      valueField: "value",
      categoryField: "category",
      alignLabels: false,
      labels: false,
    })
  );

  series
    .get("colors")
    .set("colors", [
      am5.color("#faa6ce"),
      am5.color("#faa6ce"),
      am5.color("#ffe5bf"),
      am5.color("#ffe5bf"),
      am5.color("#b4e7dc"),
      am5.color("#b4e7dc"),
      am5.color("#2abb9c"),
      am5.color("#f3f4f6"),
      am5.color("#f3f4f6"),
      am5.color("#f3f4f6"),
    ]);
  series.states.create("hidden", {
    startAngle: 180,
    endAngle: 180,
  });

  series.slices.template.setAll({
    cornerRadius: 15,
    topWidth: am5.percent(100),
  });
  series.ticks.template.setAll({
    forceHidden: false,
  });

  // Set data
  series.data.setAll([
    { value: 5, category: "One" },
    { value: 5, category: "Two" },
    { value: 5, category: "Three" },
    { value: 5, category: "Four" },
    { value: 5, category: "Five" },
    { value: 5, category: "six" },
    { value: 5, category: "seven" },
    { value: 5, category: "night" },
    { value: 5, category: "nine" },
    { value: 5, category: "ten" },
  ]);
  series.labels.template.set("visible", false);
  series.appear(1000, 100);
}); 


