import { YeCascader } from "@/library/index.js";
import { createArgTypes } from "@/stories/docs/yeui/utils/index.js";
import { sizeOptions } from "@/library/ui/yeui/yeConfig.js";

/**
 * 级联选择器。
 */
export default {
  title: "yeui/YeCascader",
  component: YeCascader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: createArgTypes({
    size: {
      control: { type: "radio" },
      options: sizeOptions,
    },
  }),
};

export const Basic = {
  args: {
    value: ["1-1"],
    dicData: [
      {
        value: "1-1",
        label: "1-1",
        children: [
          {
            value: "1-1-1",
            label: "1-1-1",
            children: [
              {
                value: "1-1-1-1",
                label: "1-1-1-1",
                children: [
                  {
                    value: "1-1-1-1-1",
                    label: "1-1-1-1-1",
                  },
                ],
              },
              {
                value: "1-1-1-2",
                label: "1-1-1-2",
              },
            ],
          },
        ],
      },
      {
        value: "1-2",
        label: "1-2",
        children: [],
      },
    ],
    size: "small",
  },
};

export const Width = {
  args: {
    value: ["1-1"],
    width: '400px',
    dicData: [
      {
        value: "1-1",
        label: "1-1",
        children: [
          {
            value: "1-1-1",
            label: "1-1-1",
            children: [
              {
                value: "1-1-1-1",
                label: "1-1-1-1",
                children: [
                  {
                    value: "1-1-1-1-1",
                    label: "1-1-1-1-1",
                  },
                ],
              },
              {
                value: "1-1-1-2",
                label: "1-1-1-2",
              },
            ],
          },
        ],
      },
      {
        value: "1-2",
        label: "1-2",
        children: [],
      },
    ],
    size: "small",
  },
};

export const showAllLevels = {
  args: {
    value: ["1-1",'1-1-1', '1-1-1-2'],
    dicData: [
      {
        value: "1-1",
        label: "1-1",
        children: [
          {
            value: "1-1-1",
            label: "1-1-1",
            children: [
              {
                value: "1-1-1-1",
                label: "1-1-1-1",
                children: [
                  {
                    value: "1-1-1-1-1",
                    label: "1-1-1-1-1",
                  },
                ],
              },
              {
                value: "1-1-1-2",
                label: "1-1-1-2",
              },
            ],
          },
        ],
      },
      {
        value: "1-2",
        label: "1-2",
        children: [],
      },
    ],
    showAllLevels: true,
  },
};

export const notShowAllLevels = {
  args: {
    value: ["1-1",'1-1-1', '1-1-1-2'],
    dicData: [
      {
        value: "1-1",
        label: "1-1",
        children: [
          {
            value: "1-1-1",
            label: "1-1-1",
            children: [
              {
                value: "1-1-1-1",
                label: "1-1-1-1",
                children: [
                  {
                    value: "1-1-1-1-1",
                    label: "1-1-1-1-1",
                  },
                ],
              },
              {
                value: "1-1-1-2",
                label: "1-1-1-2",
              },
            ],
          },
        ],
      },
      {
        value: "1-2",
        label: "1-2",
        children: [],
      },
    ],
    showAllLevels: false,
  },
};

export const scrollList = {
  args: {
    value: [],
    dicData:[
      {
        "value": "2964",
        "label": "广州市",
        "children": [
          {
            "value": "14349164",
            "label": "番禺区",
            "children": null,
            "level": 2
          },
          {
            "value": "14349170",
            "label": "花都区",
            "children": null,
            "level": 2
          },
          {
            "value": "14349178",
            "label": "从化区",
            "children": null,
            "level": 2
          },
          {
            "value": "14349180",
            "label": "黄埔区",
            "children": null,
            "level": 2
          },
          {
            "value": "14349217",
            "label": "增城区",
            "children": null,
            "level": 2
          }
        ],
        "level": 1
      },
      {
        "value": "5930",
        "label": "韶关市",
        "children": [
          {
            "value": "14349166",
            "label": "翁源县",
            "children": null
          },
          {
            "value": "14349173",
            "label": "乳源瑶族自治县",
            "children": null
          },
          {
            "value": "14349174",
            "label": "新丰县",
            "children": null
          },
          {
            "value": "14349187",
            "label": "始兴县",
            "children": null
          },
          {
            "value": "14349192",
            "label": "仁化县",
            "children": null
          },
          {
            "value": "14349231",
            "label": "南雄市",
            "children": null
          },
          {
            "value": "14349236",
            "label": "乐昌市",
            "children": null
          },
          {
            "value": "14349237",
            "label": "曲江区",
            "children": null
          }
        ],
        "level": 1
      },
      {
        "value": "7524",
        "label": "深圳市",
        "children": [
          {
            "value": "14349205",
            "label": "福田区",
            "children": null
          }
        ],
        "level": 1
      },
      {
        "value": "8425",
        "label": "珠海市",
        "children": [
          {
            "value": "14349185",
            "label": "斗门区",
            "children": null
          },
          {
            "value": "14349225",
            "label": "香洲区",
            "children": null
          }
        ],
        "level": 1
      },
      {
        "value": "8790",
        "label": "汕头市",
        "children": [
          {
            "value": "14349190",
            "label": "澄海区",
            "children": null
          },
          {
            "value": "14349227",
            "label": "潮阳区",
            "children": null
          },
          {
            "value": "14349242",
            "label": "南澳县",
            "children": null
          },
          {
            "value": "14349245",
            "label": "金平区",
            "children": null
          }
        ],
        "level": 1
      },
      {
        "value": "9950",
        "label": "佛山市",
        "children": [
          {
            "value": "14349168",
            "label": "南海区",
            "children": null
          },
          {
            "value": "14349200",
            "label": "顺德区",
            "children": null
          },
          {
            "value": "14349209",
            "label": "三水区",
            "children": null
          }
        ],
        "level": 1
      },
      {
        "value": "10815",
        "label": "江门市",
        "children": [
          {
            "value": "14349176",
            "label": "恩平市",
            "children": null
          },
          {
            "value": "14349182",
            "label": "新会区",
            "children": null
          },
          {
            "value": "14349210",
            "label": "台山市",
            "children": null
          },
          {
            "value": "14349214",
            "label": "鹤山市",
            "children": null
          },
          {
            "value": "14349233",
            "label": "上川岛",
            "children": null
          },
          {
            "value": "14349241",
            "label": "开平市",
            "children": null
          }
        ],
        "level": 1
      },
      {
        "value": "12230",
        "label": "湛江市",
        "children": [
          {
            "value": "14349167",
            "label": "吴川市",
            "children": null
          },
          {
            "value": "14349183",
            "label": "麻章区",
            "children": null
          },
          {
            "value": "14349206",
            "label": "徐闻县",
            "children": null
          },
          {
            "value": "14349215",
            "label": "雷州市",
            "children": null
          },
          {
            "value": "14349226",
            "label": "遂溪县",
            "children": null
          },
          {
            "value": "14349230",
            "label": "廉江市",
            "children": null
          }
        ],
        "level": 1
      },
      {
        "value": "14347",
        "label": "茂名市",
        "children": [
          {
            "value": "14349169",
            "label": "化州市",
            "children": null
          },
          {
            "value": "14349175",
            "label": "信宜市",
            "children": null
          },
          {
            "value": "14349199",
            "label": "茂南区",
            "children": null
          },
          {
            "value": "14349219",
            "label": "高州市",
            "children": null
          },
          {
            "value": "14349220",
            "label": "电白区",
            "children": null
          }
        ],
        "level": 1
      },
      {
        "value": "16395",
        "label": "肇庆市",
        "children": [
          {
            "value": "14349172",
            "label": "高要区",
            "children": null
          },
          {
            "value": "14349196",
            "label": "怀集县",
            "children": null
          },
          {
            "value": "14349204",
            "label": "封开县",
            "children": null
          },
          {
            "value": "14349208",
            "label": "广宁县",
            "children": null
          },
          {
            "value": "14349224",
            "label": "四会市",
            "children": null
          },
          {
            "value": "14349229",
            "label": "德庆县",
            "children": null
          }
        ],
        "level": 1
      },
      {
        "value": "18064",
        "label": "惠州市",
        "children": [
          {
            "value": "14349194",
            "label": "惠城区",
            "children": null
          },
          {
            "value": "14349218",
            "label": "惠东县",
            "children": null
          },
          {
            "value": "14349238",
            "label": "龙门县",
            "children": null
          },
          {
            "value": "14349248",
            "label": "博罗县",
            "children": null
          }
        ],
        "level": 1
      },
      {
        "value": "19477",
        "label": "梅州市",
        "children": [
          {
            "value": "14349177",
            "label": "兴宁市",
            "children": null
          },
          {
            "value": "14349181",
            "label": "五华县",
            "children": null
          },
          {
            "value": "14349189",
            "label": "平远县",
            "children": null
          },
          {
            "value": "14349207",
            "label": "丰顺县",
            "children": null
          },
          {
            "value": "14349232",
            "label": "梅县区",
            "children": null
          },
          {
            "value": "14349234",
            "label": "蕉岭县",
            "children": null
          },
          {
            "value": "14349239",
            "label": "大埔县",
            "children": null
          }
        ],
        "level": 1
      },
      {
        "value": "21861",
        "label": "汕尾市",
        "children": [
          {
            "value": "14349171",
            "label": "海丰县",
            "children": null
          },
          {
            "value": "14349213",
            "label": "城区",
            "children": null
          },
          {
            "value": "14349247",
            "label": "陆丰市",
            "children": null
          }
        ],
        "level": 1
      },
      {
        "value": "22824",
        "label": "河源市",
        "children": [
          {
            "value": "14349184",
            "label": "连平县",
            "children": null
          },
          {
            "value": "14349197",
            "label": "东源县",
            "children": null
          },
          {
            "value": "14349211",
            "label": "龙川县",
            "children": null
          },
          {
            "value": "14349223",
            "label": "紫金县",
            "children": null
          },
          {
            "value": "14349244",
            "label": "和平县",
            "children": null
          }
        ],
        "level": 1
      },
      {
        "value": "24373",
        "label": "阳江市",
        "children": [
          {
            "value": "14349216",
            "label": "阳春市",
            "children": null
          },
          {
            "value": "14349221",
            "label": "江城区",
            "children": null
          }
        ],
        "level": 1
      },
      {
        "value": "25307",
        "label": "清远市",
        "children": [
          {
            "value": "14349165",
            "label": "英德市",
            "children": null
          },
          {
            "value": "14349179",
            "label": "阳山县",
            "children": null
          },
          {
            "value": "14349188",
            "label": "连南瑶族自治县",
            "children": null
          },
          {
            "value": "14349201",
            "label": "连州市",
            "children": null
          },
          {
            "value": "14349203",
            "label": "连山壮族瑶族自治县",
            "children": null
          },
          {
            "value": "14349212",
            "label": "清城区",
            "children": null
          },
          {
            "value": "14349243",
            "label": "佛冈县",
            "children": null
          }
        ],
        "level": 1
      },
      {
        "value": "26632",
        "label": "东莞市",
        "children": [
          {
            "value": "14349228",
            "label": "东莞市",
            "children": null
          }
        ],
        "level": 1
      },
      {
        "value": "27271",
        "label": "中山市",
        "children": [
          {
            "value": "14349191",
            "label": "中山市",
            "children": null
          }
        ],
        "level": 1
      },
      {
        "value": "27573",
        "label": "潮州市",
        "children": [
          {
            "value": "14349195",
            "label": "湘桥区",
            "children": null
          },
          {
            "value": "14349246",
            "label": "饶平县",
            "children": null
          }
        ],
        "level": 1
      },
      {
        "value": "28670",
        "label": "揭阳市",
        "children": [
          {
            "value": "14349186",
            "label": "揭西县",
            "children": null
          },
          {
            "value": "14349198",
            "label": "揭东区",
            "children": null
          },
          {
            "value": "14349202",
            "label": "普宁市",
            "children": null
          },
          {
            "value": "14349235",
            "label": "惠来县",
            "children": null
          }
        ],
        "level": 1
      },
      {
        "value": "30430",
        "label": "云浮市",
        "children": [
          {
            "value": "14349193",
            "label": "罗定市",
            "children": null
          },
          {
            "value": "14349222",
            "label": "云城区",
            "children": null
          },
          {
            "value": "14349240",
            "label": "新兴县",
            "children": null
          },
          {
            "value": "14349249",
            "label": "郁南县",
            "children": null
          }
        ],
        "level": 1
      }
    ]
  }
}
