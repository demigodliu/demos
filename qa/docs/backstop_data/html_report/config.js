report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../../../backstop_data/bitmaps_reference/Baidu_Map_0_document_0_phone.png",
        "test": "../../../backstop_data/bitmaps_test/20201227-105340/Baidu_Map_0_document_0_phone.png",
        "selector": "document",
        "fileName": "Baidu_Map_0_document_0_phone.png",
        "label": "Map",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://map.baidu.com/mobile/webapp/index/index/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.84",
          "analysisTime": 28
        },
        "diffImage": "../../../backstop_data/bitmaps_test/20201227-105340/failed_diff_Baidu_Map_0_document_0_phone.png"
      },
      "status": "fail"
    }
  ],
  "id": "Baidu"
});