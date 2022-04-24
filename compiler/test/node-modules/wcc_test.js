#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const MODE = typeof nw === 'object' ? 'wine' : 'linux'

const wcc_options1 = {
    "files": ["./miniprogram_npm/miniprogram-barrage/index.wxml", "./miniprogram_npm/miniprogram-recycle-view/recycle-item.wxml", "./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxml", "./miniprogram_npm/wxml-to-canvas/index.wxml", "./page/API/index.wxml", "./page/API/components/set-tab-bar/set-tab-bar.wxml", "./page/cloud/index.wxml", "./page/common/foot.wxml", "./page/common/head.wxml", "./page/component/index.wxml", "./page/extend/index.wxml"],
    "debugWXS": false,
    "debug": true,
    "genfuncname": "$gwx",
    "isCut": true,
    "wxmlCompileConfig": "9>_<1027./miniprogram_npm/miniprogram-barrage/index.wxml>_<10270>_<1027./miniprogram_npm/miniprogram-recycle-view/recycle-item.wxml>_<10270>_<1027./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxml>_<10270>_<1027./miniprogram_npm/wxml-to-canvas/index.wxml>_<10270>_<1027./page/API/index.wxml>_<10271>_<1027set-tab-bar>_<1027./page/API/components/set-tab-bar/set-tab-bar.wxml>_<10270>_<1027./page/cloud/index.wxml>_<10270>_<1027./page/component/index.wxml>_<10270>_<1027./page/extend/index.wxml>_<10270",
    "wxmlCompileConfigSplit": ">_<1027",
    "replaceContent": {
        "./packageComponent/pages/camera-scan-code/camera-scan-code.wxml": "<import data-ib-structured-id=\"0\"  src=\"../../../common/head.wxml\" />\n<import data-ib-structured-id=\"1\"  src=\"../../../common/foot.wxml\" />\n\n<view class=\"container page\" data-weui-theme=\"{{theme}}\" data-ib-structured-id=\"2\">\n  <template data-ib-structured-id=\"3\"  is=\"head\" data=\"{{title: 'camera'}}\"/>\n\n  <view class=\"page-body\" data-ib-structured-id=\"4\">\n    <view class=\"page-body-wrapper\" data-ib-structured-id=\"5\">\n      <camera\n        mode=\"scanCode\"\n        flash=\"off\"\n        bindscancode=\"scanCode\"\n        binderror=\"error\"\n       data-ib-structured-id=\"6\">\n      </camera>\n      <view class=\"btn-area\" data-ib-structured-id=\"7\">\n        <button type=\"primary\" bindtap=\"navigateBack\" data-ib-structured-id=\"8\">\n          返回正常模式\n        </button>\n      </view>\n      <form data-ib-structured-id=\"9\">\n        <view class=\"page-section\" data-ib-structured-id=\"10\">\n          <view class=\"weui-cells weui-cells_after-title\" data-ib-structured-id=\"11\">\n            <view class=\"weui-cell weui-cell_input\" data-ib-structured-id=\"12\">\n              <view class=\"weui-cell__hd\" data-ib-structured-id=\"13\">\n                <view class=\"weui-label\" data-ib-structured-id=\"14\">类型</view>\n              </view>\n              <view class=\"weui-cell__bd\" data-ib-structured-id=\"15\">\n                {{ result.type }}\n              </view>\n            </view>\n            <view class=\"weui-cell weui-cell_input\" data-ib-structured-id=\"16\">\n              <view class=\"weui-cell__hd\" data-ib-structured-id=\"17\">\n                <view class=\"weui-label\" data-ib-structured-id=\"18\">结果</view>\n              </view>\n              <view class=\"weui-cell__bd\" data-ib-structured-id=\"19\">\n                {{ result.result }}\n              </view>\n            </view>\n          </view>\n        </view>\n      </form>\n    </view>\n  </view>\n\n  <template data-ib-structured-id=\"20\"  is=\"foot\" />\n</view>\n"
    },
    "cwd": "/mnt/disk1/WeChatProjects/miniprogram-demo/miniprogram/",
    "lazyloadConfig": ""
}
const wcc_options2 = {
    "files": ["./miniprogram_npm/miniprogram-barrage/index.wxml", "./miniprogram_npm/miniprogram-recycle-view/recycle-item.wxml", "./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxml", "./miniprogram_npm/wxml-to-canvas/index.wxml", "./page/API/index.wxml", "./page/API/components/set-tab-bar/set-tab-bar.wxml", "./page/cloud/index.wxml", "./page/common/foot.wxml", "./page/common/head.wxml", "./page/component/index.wxml", "./page/extend/index.wxml", "./packageComponent/pages/canvas/canvas-2d/canvas-2d.wxml", "./packageComponent/pages/canvas/webgl/webgl.wxml", "./packageComponent/pages/content/icon/icon.wxml", "./packageComponent/pages/content/progress/progress.wxml", "./packageComponent/pages/content/rich-text/rich-text.wxml", "./packageComponent/pages/content/text/text.wxml", "./packageComponent/pages/form/button/button.wxml", "./packageComponent/pages/form/checkbox/checkbox.wxml", "./packageComponent/pages/form/editor/editor.wxml", "./packageComponent/pages/form/form/form.wxml", "./packageComponent/pages/form/input/input.wxml", "./packageComponent/pages/form/label/label.wxml", "./packageComponent/pages/form/picker/picker.wxml", "./packageComponent/pages/form/picker-view/picker-view.wxml", "./packageComponent/pages/form/radio/radio.wxml", "./packageComponent/pages/form/slider/slider.wxml", "./packageComponent/pages/form/switch/switch.wxml", "./packageComponent/pages/form/textarea/textarea.wxml", "./packageComponent/pages/map/map/map.wxml", "./packageComponent/pages/media/camera/camera.wxml", "./packageComponent/pages/media/image/image.wxml", "./packageComponent/pages/media/live-player/live-player.wxml", "./packageComponent/pages/media/live-pusher/live-pusher.wxml", "./packageComponent/pages/media/video/video.wxml", "./packageComponent/pages/nav/navigator/navigator.wxml", "./packageComponent/pages/obstacle-free/aria-component/aria-component.wxml", "./packageComponent/pages/open/ad/ad.wxml", "./packageComponent/pages/open/open-data/open-data.wxml", "./packageComponent/pages/open/web-view/web-view.wxml", "./packageComponent/pages/view/cover-view/cover-view.wxml", "./packageComponent/pages/view/movable-view/movable-view.wxml", "./packageComponent/pages/view/scroll-view/scroll-view.wxml", "./packageComponent/pages/view/swiper/swiper.wxml", "./packageComponent/pages/view/view/view.wxml"],
    "debugWXS": false,
    "debug": true,
    "genfuncname": "$7061636b616765436f6d706f6e656e742f",
    "wxmlCompileConfig": "34>_<3253./packageComponent/pages/canvas/canvas-2d/canvas-2d.wxml>_<32530>_<3253./packageComponent/pages/canvas/webgl/webgl.wxml>_<32530>_<3253./packageComponent/pages/content/icon/icon.wxml>_<32530>_<3253./packageComponent/pages/content/progress/progress.wxml>_<32530>_<3253./packageComponent/pages/content/rich-text/rich-text.wxml>_<32530>_<3253./packageComponent/pages/content/text/text.wxml>_<32530>_<3253./packageComponent/pages/form/button/button.wxml>_<32530>_<3253./packageComponent/pages/form/checkbox/checkbox.wxml>_<32530>_<3253./packageComponent/pages/form/editor/editor.wxml>_<32530>_<3253./packageComponent/pages/form/form/form.wxml>_<32530>_<3253./packageComponent/pages/form/input/input.wxml>_<32530>_<3253./packageComponent/pages/form/label/label.wxml>_<32530>_<3253./packageComponent/pages/form/picker/picker.wxml>_<32530>_<3253./packageComponent/pages/form/picker-view/picker-view.wxml>_<32530>_<3253./packageComponent/pages/form/radio/radio.wxml>_<32530>_<3253./packageComponent/pages/form/slider/slider.wxml>_<32530>_<3253./packageComponent/pages/form/switch/switch.wxml>_<32530>_<3253./packageComponent/pages/form/textarea/textarea.wxml>_<32530>_<3253./packageComponent/pages/map/map/map.wxml>_<32530>_<3253./packageComponent/pages/media/camera/camera.wxml>_<32530>_<3253./packageComponent/pages/media/image/image.wxml>_<32530>_<3253./packageComponent/pages/media/live-player/live-player.wxml>_<32530>_<3253./packageComponent/pages/media/live-pusher/live-pusher.wxml>_<32530>_<3253./packageComponent/pages/media/video/video.wxml>_<32530>_<3253./packageComponent/pages/nav/navigator/navigator.wxml>_<32530>_<3253./packageComponent/pages/obstacle-free/aria-component/aria-component.wxml>_<32530>_<3253./packageComponent/pages/open/ad/ad.wxml>_<32530>_<3253./packageComponent/pages/open/open-data/open-data.wxml>_<32530>_<3253./packageComponent/pages/open/web-view/web-view.wxml>_<32530>_<3253./packageComponent/pages/view/cover-view/cover-view.wxml>_<32530>_<3253./packageComponent/pages/view/movable-view/movable-view.wxml>_<32530>_<3253./packageComponent/pages/view/scroll-view/scroll-view.wxml>_<32530>_<3253./packageComponent/pages/view/swiper/swiper.wxml>_<32530>_<3253./packageComponent/pages/view/view/view.wxml>_<32530",
    "wxmlCompileConfigSplit": ">_<3253",
    "replaceContent": {
        "./packageComponent/pages/camera-scan-code/camera-scan-code.wxml": "<import data-ib-structured-id=\"0\"  src=\"../../../common/head.wxml\" />\n<import data-ib-structured-id=\"1\"  src=\"../../../common/foot.wxml\" />\n\n<view class=\"container page\" data-weui-theme=\"{{theme}}\" data-ib-structured-id=\"2\">\n  <template data-ib-structured-id=\"3\"  is=\"head\" data=\"{{title: 'camera'}}\"/>\n\n  <view class=\"page-body\" data-ib-structured-id=\"4\">\n    <view class=\"page-body-wrapper\" data-ib-structured-id=\"5\">\n      <camera\n        mode=\"scanCode\"\n        flash=\"off\"\n        bindscancode=\"scanCode\"\n        binderror=\"error\"\n       data-ib-structured-id=\"6\">\n      </camera>\n      <view class=\"btn-area\" data-ib-structured-id=\"7\">\n        <button type=\"primary\" bindtap=\"navigateBack\" data-ib-structured-id=\"8\">\n          返回正常模式\n        </button>\n      </view>\n      <form data-ib-structured-id=\"9\">\n        <view class=\"page-section\" data-ib-structured-id=\"10\">\n          <view class=\"weui-cells weui-cells_after-title\" data-ib-structured-id=\"11\">\n            <view class=\"weui-cell weui-cell_input\" data-ib-structured-id=\"12\">\n              <view class=\"weui-cell__hd\" data-ib-structured-id=\"13\">\n                <view class=\"weui-label\" data-ib-structured-id=\"14\">类型</view>\n              </view>\n              <view class=\"weui-cell__bd\" data-ib-structured-id=\"15\">\n                {{ result.type }}\n              </view>\n            </view>\n            <view class=\"weui-cell weui-cell_input\" data-ib-structured-id=\"16\">\n              <view class=\"weui-cell__hd\" data-ib-structured-id=\"17\">\n                <view class=\"weui-label\" data-ib-structured-id=\"18\">结果</view>\n              </view>\n              <view class=\"weui-cell__bd\" data-ib-structured-id=\"19\">\n                {{ result.result }}\n              </view>\n            </view>\n          </view>\n        </view>\n      </form>\n    </view>\n  </view>\n\n  <template data-ib-structured-id=\"20\"  is=\"foot\" />\n</view>\n"
    },
    "cwd": "/mnt/disk1/WeChatProjects/miniprogram-demo/miniprogram/",
    "lazyloadConfig": ""
}
const wcc_options3 = {
    "files": ["./miniprogram_npm/miniprogram-barrage/index.wxml", "./miniprogram_npm/miniprogram-recycle-view/recycle-item.wxml", "./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxml", "./miniprogram_npm/wxml-to-canvas/index.wxml", "./page/API/index.wxml", "./page/API/components/set-tab-bar/set-tab-bar.wxml", "./page/cloud/index.wxml", "./page/common/foot.wxml", "./page/common/head.wxml", "./page/component/index.wxml", "./page/extend/index.wxml"],
    "debugWXS": false,
    "debug": true,
    "genfuncname": "$gwx",
    "isCut": true,
    "wxmlCompileConfig": "9>_<3589./miniprogram_npm/miniprogram-barrage/index.wxml>_<35890>_<3589./miniprogram_npm/miniprogram-recycle-view/recycle-item.wxml>_<35890>_<3589./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxml>_<35890>_<3589./miniprogram_npm/wxml-to-canvas/index.wxml>_<35890>_<3589./page/API/index.wxml>_<35891>_<3589set-tab-bar>_<3589./page/API/components/set-tab-bar/set-tab-bar.wxml>_<35890>_<3589./page/cloud/index.wxml>_<35890>_<3589./page/component/index.wxml>_<35890>_<3589./page/extend/index.wxml>_<35890",
    "wxmlCompileConfigSplit": ">_<3589",
    "replaceContent": {
        "./packageComponent/pages/camera-scan-code/camera-scan-code.wxml": "<import data-ib-structured-id=\"0\"  src=\"../../../common/head.wxml\" />\n<import data-ib-structured-id=\"1\"  src=\"../../../common/foot.wxml\" />\n\n<view class=\"container page\" data-weui-theme=\"{{theme}}\" data-ib-structured-id=\"2\">\n  <template data-ib-structured-id=\"3\"  is=\"head\" data=\"{{title: 'camera'}}\"/>\n\n  <view class=\"page-body\" data-ib-structured-id=\"4\">\n    <view class=\"page-body-wrapper\" data-ib-structured-id=\"5\">\n      <camera\n        mode=\"scanCode\"\n        flash=\"off\"\n        bindscancode=\"scanCode\"\n        binderror=\"error\"\n       data-ib-structured-id=\"6\">\n      </camera>\n      <view class=\"btn-area\" data-ib-structured-id=\"7\">\n        <button type=\"primary\" bindtap=\"navigateBack\" data-ib-structured-id=\"8\">\n          返回正常模式\n        </button>\n      </view>\n      <form data-ib-structured-id=\"9\">\n        <view class=\"page-section\" data-ib-structured-id=\"10\">\n          <view class=\"weui-cells weui-cells_after-title\" data-ib-structured-id=\"11\">\n            <view class=\"weui-cell weui-cell_input\" data-ib-structured-id=\"12\">\n              <view class=\"weui-cell__hd\" data-ib-structured-id=\"13\">\n                <view class=\"weui-label\" data-ib-structured-id=\"14\">类型</view>\n              </view>\n              <view class=\"weui-cell__bd\" data-ib-structured-id=\"15\">\n                {{ result.type }}\n              </view>\n            </view>\n            <view class=\"weui-cell weui-cell_input\" data-ib-structured-id=\"16\">\n              <view class=\"weui-cell__hd\" data-ib-structured-id=\"17\">\n                <view class=\"weui-label\" data-ib-structured-id=\"18\">结果</view>\n              </view>\n              <view class=\"weui-cell__bd\" data-ib-structured-id=\"19\">\n                {{ result.result }}\n              </view>\n            </view>\n          </view>\n        </view>\n      </form>\n    </view>\n  </view>\n\n  <template data-ib-structured-id=\"20\"  is=\"foot\" />\n</view>\n"
    },
    "cwd": "/mnt/disk1/WeChatProjects/miniprogram-demo/miniprogram/",
    "lazyloadConfig": ""
}
const wcc_options4 = {
    "files": ["./miniprogram_npm/miniprogram-barrage/index.wxml", "./miniprogram_npm/miniprogram-recycle-view/recycle-item.wxml", "./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxml", "./miniprogram_npm/wxml-to-canvas/index.wxml", "./page/API/index.wxml", "./page/API/components/set-tab-bar/set-tab-bar.wxml", "./page/cloud/index.wxml", "./page/common/foot.wxml", "./page/common/head.wxml", "./page/component/index.wxml", "./page/extend/index.wxml"],
    "debugWXS": false,
    "debug": true,
    "genfuncname": "$gwx",
    "wxmlCompileConfig": "9>_<5170./miniprogram_npm/miniprogram-barrage/index.wxml>_<51700>_<5170./miniprogram_npm/miniprogram-recycle-view/recycle-item.wxml>_<51700>_<5170./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxml>_<51700>_<5170./miniprogram_npm/wxml-to-canvas/index.wxml>_<51700>_<5170./page/API/index.wxml>_<51701>_<5170set-tab-bar>_<5170./page/API/components/set-tab-bar/set-tab-bar.wxml>_<51700>_<5170./page/cloud/index.wxml>_<51700>_<5170./page/component/index.wxml>_<51700>_<5170./page/extend/index.wxml>_<51700",
    "wxmlCompileConfigSplit": ">_<5170",
    "replaceContent": {
        "./packageComponent/pages/camera-scan-code/camera-scan-code.wxml": "<import data-ib-structured-id=\"0\"  src=\"../../../common/head.wxml\" />\n<import data-ib-structured-id=\"1\"  src=\"../../../common/foot.wxml\" />\n\n<view class=\"container page\" data-weui-theme=\"{{theme}}\" data-ib-structured-id=\"2\">\n  <template data-ib-structured-id=\"3\"  is=\"head\" data=\"{{title: 'camera'}}\"/>\n\n  <view class=\"page-body\" data-ib-structured-id=\"4\">\n    <view class=\"page-body-wrapper\" data-ib-structured-id=\"5\">\n      <camera\n        mode=\"scanCode\"\n        flash=\"off\"\n        bindscancode=\"scanCode\"\n        binderror=\"error\"\n       data-ib-structured-id=\"6\">\n      </camera>\n      <view class=\"btn-area\" data-ib-structured-id=\"7\">\n        <button type=\"primary\" bindtap=\"navigateBack\" data-ib-structured-id=\"8\">\n          返回正常模式\n        </button>\n      </view>\n      <form data-ib-structured-id=\"9\">\n        <view class=\"page-section\" data-ib-structured-id=\"10\">\n          <view class=\"weui-cells weui-cells_after-title\" data-ib-structured-id=\"11\">\n            <view class=\"weui-cell weui-cell_input\" data-ib-structured-id=\"12\">\n              <view class=\"weui-cell__hd\" data-ib-structured-id=\"13\">\n                <view class=\"weui-label\" data-ib-structured-id=\"14\">类型</view>\n              </view>\n              <view class=\"weui-cell__bd\" data-ib-structured-id=\"15\">\n                {{ result.type }}\n              </view>\n            </view>\n            <view class=\"weui-cell weui-cell_input\" data-ib-structured-id=\"16\">\n              <view class=\"weui-cell__hd\" data-ib-structured-id=\"17\">\n                <view class=\"weui-label\" data-ib-structured-id=\"18\">结果</view>\n              </view>\n              <view class=\"weui-cell__bd\" data-ib-structured-id=\"19\">\n                {{ result.result }}\n              </view>\n            </view>\n          </view>\n        </view>\n      </form>\n    </view>\n  </view>\n\n  <template data-ib-structured-id=\"20\"  is=\"foot\" />\n</view>\n"
    },
    "cwd": "/mnt/disk1/WeChatProjects/miniprogram-demo/miniprogram/",
    "lazyloadConfig": ""
}
const wcc_options5 = {
    "files": ["./miniprogram_npm/miniprogram-barrage/index.wxml", "./miniprogram_npm/miniprogram-recycle-view/recycle-item.wxml", "./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxml", "./miniprogram_npm/wxml-to-canvas/index.wxml", "./page/API/index.wxml", "./page/API/components/set-tab-bar/set-tab-bar.wxml", "./page/cloud/index.wxml", "./page/common/foot.wxml", "./page/common/head.wxml", "./page/component/index.wxml", "./page/extend/index.wxml", "./packageComponent/pages/canvas/canvas-2d/canvas-2d.wxml", "./packageComponent/pages/canvas/webgl/webgl.wxml", "./packageComponent/pages/content/icon/icon.wxml", "./packageComponent/pages/content/progress/progress.wxml", "./packageComponent/pages/content/rich-text/rich-text.wxml", "./packageComponent/pages/content/text/text.wxml", "./packageComponent/pages/form/button/button.wxml", "./packageComponent/pages/form/checkbox/checkbox.wxml", "./packageComponent/pages/form/editor/editor.wxml", "./packageComponent/pages/form/form/form.wxml", "./packageComponent/pages/form/input/input.wxml", "./packageComponent/pages/form/label/label.wxml", "./packageComponent/pages/form/picker/picker.wxml", "./packageComponent/pages/form/picker-view/picker-view.wxml", "./packageComponent/pages/form/radio/radio.wxml", "./packageComponent/pages/form/slider/slider.wxml", "./packageComponent/pages/form/switch/switch.wxml", "./packageComponent/pages/form/textarea/textarea.wxml", "./packageComponent/pages/map/map/map.wxml", "./packageComponent/pages/media/camera/camera.wxml", "./packageComponent/pages/media/image/image.wxml", "./packageComponent/pages/media/live-player/live-player.wxml", "./packageComponent/pages/media/live-pusher/live-pusher.wxml", "./packageComponent/pages/media/video/video.wxml", "./packageComponent/pages/nav/navigator/navigator.wxml", "./packageComponent/pages/obstacle-free/aria-component/aria-component.wxml", "./packageComponent/pages/open/ad/ad.wxml", "./packageComponent/pages/open/open-data/open-data.wxml", "./packageComponent/pages/open/web-view/web-view.wxml", "./packageComponent/pages/view/cover-view/cover-view.wxml", "./packageComponent/pages/view/movable-view/movable-view.wxml", "./packageComponent/pages/view/scroll-view/scroll-view.wxml", "./packageComponent/pages/view/swiper/swiper.wxml", "./packageComponent/pages/view/view/view.wxml"],
    "debugWXS": false,
    "debug": true,
    "genfuncname": "$7061636b616765436f6d706f6e656e742f",
    "isCut": true,
    "wxmlCompileConfig": "34>_<6946./packageComponent/pages/canvas/canvas-2d/canvas-2d.wxml>_<69460>_<6946./packageComponent/pages/canvas/webgl/webgl.wxml>_<69460>_<6946./packageComponent/pages/content/icon/icon.wxml>_<69460>_<6946./packageComponent/pages/content/progress/progress.wxml>_<69460>_<6946./packageComponent/pages/content/rich-text/rich-text.wxml>_<69460>_<6946./packageComponent/pages/content/text/text.wxml>_<69460>_<6946./packageComponent/pages/form/button/button.wxml>_<69460>_<6946./packageComponent/pages/form/checkbox/checkbox.wxml>_<69460>_<6946./packageComponent/pages/form/editor/editor.wxml>_<69460>_<6946./packageComponent/pages/form/form/form.wxml>_<69460>_<6946./packageComponent/pages/form/input/input.wxml>_<69460>_<6946./packageComponent/pages/form/label/label.wxml>_<69460>_<6946./packageComponent/pages/form/picker/picker.wxml>_<69460>_<6946./packageComponent/pages/form/picker-view/picker-view.wxml>_<69460>_<6946./packageComponent/pages/form/radio/radio.wxml>_<69460>_<6946./packageComponent/pages/form/slider/slider.wxml>_<69460>_<6946./packageComponent/pages/form/switch/switch.wxml>_<69460>_<6946./packageComponent/pages/form/textarea/textarea.wxml>_<69460>_<6946./packageComponent/pages/map/map/map.wxml>_<69460>_<6946./packageComponent/pages/media/camera/camera.wxml>_<69460>_<6946./packageComponent/pages/media/image/image.wxml>_<69460>_<6946./packageComponent/pages/media/live-player/live-player.wxml>_<69460>_<6946./packageComponent/pages/media/live-pusher/live-pusher.wxml>_<69460>_<6946./packageComponent/pages/media/video/video.wxml>_<69460>_<6946./packageComponent/pages/nav/navigator/navigator.wxml>_<69460>_<6946./packageComponent/pages/obstacle-free/aria-component/aria-component.wxml>_<69460>_<6946./packageComponent/pages/open/ad/ad.wxml>_<69460>_<6946./packageComponent/pages/open/open-data/open-data.wxml>_<69460>_<6946./packageComponent/pages/open/web-view/web-view.wxml>_<69460>_<6946./packageComponent/pages/view/cover-view/cover-view.wxml>_<69460>_<6946./packageComponent/pages/view/movable-view/movable-view.wxml>_<69460>_<6946./packageComponent/pages/view/scroll-view/scroll-view.wxml>_<69460>_<6946./packageComponent/pages/view/swiper/swiper.wxml>_<69460>_<6946./packageComponent/pages/view/view/view.wxml>_<69460",
    "wxmlCompileConfigSplit": ">_<6946",
    "replaceContent": {
        "./packageComponent/pages/camera-scan-code/camera-scan-code.wxml": "<import data-ib-structured-id=\"0\"  src=\"../../../common/head.wxml\" />\n<import data-ib-structured-id=\"1\"  src=\"../../../common/foot.wxml\" />\n\n<view class=\"container page\" data-weui-theme=\"{{theme}}\" data-ib-structured-id=\"2\">\n  <template data-ib-structured-id=\"3\"  is=\"head\" data=\"{{title: 'camera'}}\"/>\n\n  <view class=\"page-body\" data-ib-structured-id=\"4\">\n    <view class=\"page-body-wrapper\" data-ib-structured-id=\"5\">\n      <camera\n        mode=\"scanCode\"\n        flash=\"off\"\n        bindscancode=\"scanCode\"\n        binderror=\"error\"\n       data-ib-structured-id=\"6\">\n      </camera>\n      <view class=\"btn-area\" data-ib-structured-id=\"7\">\n        <button type=\"primary\" bindtap=\"navigateBack\" data-ib-structured-id=\"8\">\n          返回正常模式\n        </button>\n      </view>\n      <form data-ib-structured-id=\"9\">\n        <view class=\"page-section\" data-ib-structured-id=\"10\">\n          <view class=\"weui-cells weui-cells_after-title\" data-ib-structured-id=\"11\">\n            <view class=\"weui-cell weui-cell_input\" data-ib-structured-id=\"12\">\n              <view class=\"weui-cell__hd\" data-ib-structured-id=\"13\">\n                <view class=\"weui-label\" data-ib-structured-id=\"14\">类型</view>\n              </view>\n              <view class=\"weui-cell__bd\" data-ib-structured-id=\"15\">\n                {{ result.type }}\n              </view>\n            </view>\n            <view class=\"weui-cell weui-cell_input\" data-ib-structured-id=\"16\">\n              <view class=\"weui-cell__hd\" data-ib-structured-id=\"17\">\n                <view class=\"weui-label\" data-ib-structured-id=\"18\">结果</view>\n              </view>\n              <view class=\"weui-cell__bd\" data-ib-structured-id=\"19\">\n                {{ result.result }}\n              </view>\n            </view>\n          </view>\n        </view>\n      </form>\n    </view>\n  </view>\n\n  <template data-ib-structured-id=\"20\"  is=\"foot\" />\n</view>\n"
    },
    "cwd": "/mnt/disk1/WeChatProjects/miniprogram-demo/miniprogram/",
    "lazyloadConfig": ""
}
const wcc_options6 = {
    "files": ["./miniprogram_npm/miniprogram-barrage/index.wxml", "./miniprogram_npm/miniprogram-recycle-view/recycle-item.wxml", "./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxml", "./miniprogram_npm/wxml-to-canvas/index.wxml", "./page/API/index.wxml", "./page/API/components/set-tab-bar/set-tab-bar.wxml", "./page/cloud/index.wxml", "./page/common/foot.wxml", "./page/common/head.wxml", "./page/component/index.wxml", "./page/extend/index.wxml"],
    "debugWXS": false,
    "debug": true,
    "genfuncname": "$gwx",
    "wxmlCompileConfig": "9>_<4575./miniprogram_npm/miniprogram-barrage/index.wxml>_<45750>_<4575./miniprogram_npm/miniprogram-recycle-view/recycle-item.wxml>_<45750>_<4575./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxml>_<45750>_<4575./miniprogram_npm/wxml-to-canvas/index.wxml>_<45750>_<4575./page/API/index.wxml>_<45751>_<4575set-tab-bar>_<4575./page/API/components/set-tab-bar/set-tab-bar.wxml>_<45750>_<4575./page/cloud/index.wxml>_<45750>_<4575./page/component/index.wxml>_<45750>_<4575./page/extend/index.wxml>_<45750",
    "wxmlCompileConfigSplit": ">_<4575",
    "replaceContent": {
        "./page/component/index.wxml": "<view class=\"page\" data-weui-theme=\"{{theme}}\" data-ib-structured-id=\"0\">\n  <view class=\"index\" data-ib-structured-id=\"1\">\n    <view class=\"index-hd\" data-ib-structured-id=\"2\">\n      <image class=\"index-logo\" src=\"resources/kind/logo.png\" data-ib-structured-id=\"3\"></image>\n      <view class=\"index-desc\" data-ib-structured-id=\"4\">以下将展示小程序官方组件能力，组件样式仅供参考，开发者可根据自身需求自定义组件样式，具体属性参数详见 <navigator url=\"pages/doc-web-view/doc-web-view\" class=\"weui-agree__link\" data-ib-structured-id=\"5\">小程序开发文档</navigator>。</view>\n    </view>\n    <view class=\"index-bd\" data-ib-structured-id=\"6\">\n      <view class=\"kind-list\" data-ib-structured-id=\"7\">\n        <block wx:for-items=\"{{list}}\" wx:key=\"{{item.id}}\" data-ib-structured-id=\"8\">\n          <view class=\"kind-list-item\" data-ib-structured-id=\"9\">\n            <view id=\"{{item.id}}\" class=\"kind-list-item-hd {{item.open ? 'kind-list-item-hd-show' : ''}}\" bindtap=\"kindToggle\" data-ib-structured-id=\"10\">\n              <view class=\"kind-list-text\" data-ib-structured-id=\"11\">{{item.name}}</view>\n              <image wx:if=\"{{theme === 'dark'}}\" class=\"kind-list-img\" src=\"resources/kind/{{item.id}}_dark.png\" data-ib-structured-id=\"12\"></image>\n              <image wx:else class=\"kind-list-img\" src=\"resources/kind/{{item.id}}.png\" data-ib-structured-id=\"13\"></image>\n            </view>\n\n            <view class=\"kind-list-item-bd {{item.open ? 'kind-list-item-bd-show' : ''}}\" data-ib-structured-id=\"14\">\n              <view class=\"navigator-box {{item.open ? 'navigator-box-show' : ''}}\" data-ib-structured-id=\"15\">\n                <block wx:for-items=\"{{item.pages}}\" wx:for-item=\"page\" wx:key=\"*item\" data-ib-structured-id=\"16\">\n                  <navigator wx:if=\"{{page.appid}}\" target=\"miniProgram\" open-type=\"navigate\" app-id=\"{{page.appid}}\" path=\"\" extra-data=\"\" version=\"release\" class=\"navigator\" data-ib-structured-id=\"17\">\n                    <view class=\"navigator-text\" data-ib-structured-id=\"18\">{{page.name}}</view>\n                    <view class=\"navigator-arrow\" data-ib-structured-id=\"19\"></view>\n                  </navigator>\n                  <navigator wx:else url=\"/packageComponent/pages/{{item.id}}/{{page}}/{{page}}\" class=\"navigator\" data-ib-structured-id=\"20\">\n                    <view class=\"navigator-text\" data-ib-structured-id=\"21\">{{page}}</view>\n                    <view class=\"navigator-text\" data-ib-structured-id=\"22\">{{page}}</view>\n                    adsfdrvnujre\n                  </navigator>\n                </block>\n              </view>\n            </view>\n          </view>\n        </block>\n      </view>\n    </view>\n  </view>\n</view>"
    },
    "cwd": "/mnt/disk1/WeChatProjects/miniprogram-demo/miniprogram/",
    "lazyloadConfig": "./miniprogram_npm/miniprogram-barrage/index>_<4575./miniprogram_npm/miniprogram-recycle-view/recycle-item>_<4575./miniprogram_npm/miniprogram-recycle-view/recycle-view>_<4575./miniprogram_npm/wxml-to-canvas/index>_<4575./page/API/index>_<4575./page/API/components/set-tab-bar/set-tab-bar>_<4575./page/cloud/index>_<4575./page/component/index>_<4575./page/extend/index"
}

const wcc_options7 = {
    "files": ["./pages/index/index.wxml", "./pages/logs/logs.wxml"],
    "debugWXS": false,
    "debug": true,
    "genfuncname": "$gwx",
    "wxmlCompileConfig": "2>_<4665./pages/index/index.wxml>_<46650>_<4665./pages/logs/logs.wxml>_<46650",
    "wxmlCompileConfigSplit": ">_<4665",
    "replaceContent": {
        "./pages/index/index.wxml": "<!--index.wxml-->\n<view class=\"container\" data-ib-structured-id=\"0\">\n  <template name=\"odd\" data-ib-structured-id=\"1\">\n    <view data-ib-structured-id=\"2\"> odd </view>\n  </template>\n  <template name=\"even\" data-ib-structured-id=\"3\">\n    <view data-ib-structured-id=\"4\"> even </view>\n  </template>\n\n  <block wx:for=\"{{[1, 2, 3, 4, 5]}}\" data-ib-structured-id=\"5\">\n    <template data-ib-structured-id=\"6\"  is=\"{{item % 2 == 0 ? 'even' : 'odd'}}\" />\n  </block>\n<!--\n  index: int\n  msg: string\n  time: string\n-->\n<template name=\"msgItem\" data-ib-structured-id=\"7\">\n  <view data-ib-structured-id=\"8\">\n    <text data-ib-structured-id=\"9\"> {{index}}: {{msg}} </text>\n    <text data-ib-structured-id=\"10\"> Time: {{time}} </text>\n  </view>\n</template>\n<template data-ib-structured-id=\"11\"  is=\"msgItem\" data=\"{{...item}}\"/>\n\n  <view class=\"userinfo\" data-ib-structured-id=\"12\">\n    <block wx:if=\"{{canIUseOpenData}}\" data-ib-structured-id=\"13\">\n      <view class=\"userinfo-avatar\" bindtap=\"bindViewTap\" style=\"width: 183rpx; height: 148rpx; display: block; box-sizing: border-box\" data-ib-structured-id=\"14\">\n        <open-data type=\"userAvatarUrl\" data-ib-structured-id=\"15\"></open-data>\n      </view>\n      <open-data type=\"userNickName\" data-ib-structured-id=\"16\"></open-data>\n    </block>\n    <block wx:elif=\"{{!hasUserInfo}}\" data-ib-structured-id=\"17\">\n      <button wx:if=\"{{canIUseGetUserProfile}}\" bindtap=\"getUserProfile\" data-ib-structured-id=\"18\"> 获取头像昵称 </button>\n      <button wx:elif=\"{{canIUse}}\" open-type=\"getUserInfo\" bindgetuserinfo=\"getUserInfo\" data-ib-structured-id=\"19\"> 获取头像昵称 </button>\n      <view wx:else data-ib-structured-id=\"20\"> 请使用1.4.4及以上版本基础库 </view>\n    </block>\n    <block wx:else data-ib-structured-id=\"21\">\n      <image bindtap=\"bindViewTap\" class=\"userinfo-avatar\" src=\"{{userInfo.avatarUrl}}\" mode=\"cover\" data-ib-structured-id=\"22\"></image>\n      <text class=\"userinfo-nickname\" data-ib-structured-id=\"23\">{{userInfo.nickName}}</text>\n    </block>\n  </view>\n  <view class=\"usermotto\" style=\"width: 197rpx; height: 94rpx; display: block; box-sizing: border-box\" data-ib-structured-id=\"24\">\n    <text class=\"user-motto\" data-ib-structured-id=\"25\">{{motto}}</text>\n  </view>\n</view>"
    },
    "cwd": "/mnt/disk1/WeChatProjects/we1",
    "lazyloadConfig": "./pages/index/index>_<4665./pages/logs/logs"
}
const wcc_options8 = {
    "pageCount": 2,
    "files": ["./pages/index/index.wxss", "./pages/logs/logs.wxss", "./app.wxss"],
    "cwd": "/mnt/disk1/WeChatProjects/we1",
    "lazyload": true,
    "replaceContent": {
        "./pages/index/index.wxss": "/**index.wxss**/\n.userinfo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #aaa;\n}\n\n.userinfo-avatar {\n  overflow: hidden;\n  width: 128rpx;\n  height: 128rpx;\n  margin: 20rpx;\n  border-radius: 50%;\n}\n\n.usermotto {\n  margin-top: 200px;\n}"
    },
    "debug": true
}
const wcc_options9 = {
    "pageCount": 2,
    "files": ["./pages/index/index.wxss", "./pages/logs/logs.wxss", "./app.wxss"],
    "cwd": "/mnt/disk1/WeChatProjects/we1",
    "replaceContent": {
        "./pages/index/index.wxss": "/**index.wxss**/\n.userinfo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #aaa;\n}\n\n.userinfo-avatar {\n  overflow: hidden;\n  width: 128rpx;\n  height: 128rpx;\n  margin: 20rpx;\n  border-radius: 50%;\n}\n\n.usermotto {\n  margin-top: 200px;\n}"
    },
    "debug": true
}
const wcc_options10 = {
    "files": ["./pages/index/index.wxml", "./pages/logs/logs.wxml"],
    "debugWXS": false,
    "debug": true,
    "genfuncname": "$gwx",
    "isCut": true,
    "wxmlCompileConfig": "2>_<8436./pages/index/index.wxml>_<84360>_<8436./pages/logs/logs.wxml>_<84360",
    "wxmlCompileConfigSplit": ">_<8436",
    "replaceContent": {
        "./pages/index/index.wxml": "<!--index.wxml-->\n<view class=\"container\" data-ib-structured-id=\"0\">\n  <template name=\"odd\" data-ib-structured-id=\"1\">\n    <view data-ib-structured-id=\"2\"> odd </view>\n  </template>\n  <template name=\"even\" data-ib-structured-id=\"3\">\n    <view data-ib-structured-id=\"4\"> even </view>\n  </template>\n\n  <block wx:for=\"{{[1, 2, 3, 4, 5]}}\" data-ib-structured-id=\"5\">\n    <template data-ib-structured-id=\"6\"  is=\"{{item % 2 == 0 ? 'even' : 'odd'}}\" />\n  </block>\n<!--\n  index: int\n  msg: string\n  time: string\n-->\n<template name=\"msgItem\" data-ib-structured-id=\"7\">\n  <view data-ib-structured-id=\"8\">\n    <text data-ib-structured-id=\"9\"> {{index}}: {{msg}} </text>\n    <text data-ib-structured-id=\"10\"> Time: {{time}} </text>\n  </view>\n</template>\n<template data-ib-structured-id=\"11\"  is=\"msgItem\" data=\"{{...item}}\"/>\n\n  <view class=\"userinfo\" data-ib-structured-id=\"12\">\n    <block wx:if=\"{{canIUseOpenData}}\" data-ib-structured-id=\"13\">\n      <view class=\"userinfo-avatar\" bindtap=\"bindViewTap\" style=\"width: 183rpx; height: 148rpx; display: block; box-sizing: border-box\" data-ib-structured-id=\"14\">\n        <open-data type=\"userAvatarUrl\" data-ib-structured-id=\"15\"></open-data>\n      </view>\n      <open-data type=\"userNickName\" data-ib-structured-id=\"16\"></open-data>\n    </block>\n    <block wx:elif=\"{{!hasUserInfo}}\" data-ib-structured-id=\"17\">\n      <button wx:if=\"{{canIUseGetUserProfile}}\" bindtap=\"getUserProfile\" data-ib-structured-id=\"18\"> 获取头像昵称 </button>\n      <button wx:elif=\"{{canIUse}}\" open-type=\"getUserInfo\" bindgetuserinfo=\"getUserInfo\" data-ib-structured-id=\"19\"> 获取头像昵称 </button>\n      <view wx:else data-ib-structured-id=\"20\"> 请使用1.4.4及以上版本基础库 </view>\n    </block>\n    <block wx:else data-ib-structured-id=\"21\">\n      <image bindtap=\"bindViewTap\" class=\"userinfo-avatar\" src=\"{{userInfo.avatarUrl}}\" mode=\"cover\" data-ib-structured-id=\"22\"></image>\n      <text class=\"userinfo-nickname\" data-ib-structured-id=\"23\">{{userInfo.nickName}}</text>\n    </block>\n  </view>\n  <view class=\"usermotto\" style=\"width: 197rpx; height: 94rpx; display: block; box-sizing: border-box\" data-ib-structured-id=\"24\">\n    <text class=\"user-motto\" data-ib-structured-id=\"25\">{{motto}}</text>\n  </view>\n</view>"
    },
    "cwd": "/mnt/disk1/WeChatProjects/we1",
    "lazyloadConfig": ""
}
const wcc_options11 = {
    "files": ["./pages/index/index.wxml", "./pages/logs/logs.wxml"],
    "debugWXS": false,
    "debug": true,
    "genfuncname": "$gwx",
    "isCut": true,
    "wxmlCompileConfig": "2>_<6482./pages/index/index.wxml>_<64820>_<6482./pages/logs/logs.wxml>_<64820",
    "wxmlCompileConfigSplit": ">_<6482",
    "replaceContent": {
        "./pages/index/index.wxml": "<!--index.wxml-->\n<view class=\"container\" data-ib-structured-id=\"0\">\n  <template name=\"odd\" data-ib-structured-id=\"1\">\n    <view data-ib-structured-id=\"2\"> odd </view>\n  </template>\n  <template name=\"even\" data-ib-structured-id=\"3\">\n    <view data-ib-structured-id=\"4\"> even </view>\n  </template>\n\n  <block wx:for=\"{{[1, 2, 3, 4, 5]}}\" data-ib-structured-id=\"5\">\n    <template data-ib-structured-id=\"6\"  is=\"{{item % 2 == 0 ? 'even' : 'odd'}}\" />\n  </block>\n<!--\n  index: int\n  msg: string\n  time: string\n-->\n<template name=\"msgItem\" data-ib-structured-id=\"7\">\n  <view data-ib-structured-id=\"8\">\n    <text data-ib-structured-id=\"9\"> {{index}}: {{msg}} </text>\n    <text data-ib-structured-id=\"10\"> Time: {{time}} </text>\n  </view>\n</template>\n<template data-ib-structured-id=\"11\"  is=\"msgItem\" data=\"{{...item}}\"/>\n\n  <view class=\"userinfo\" data-ib-structured-id=\"12\">\n    <block wx:if=\"{{canIUseOpenData}}\" data-ib-structured-id=\"13\">\n      <view class=\"userinfo-avatar\" bindtap=\"bindViewTap\" style=\"width: 183rpx; height: 148rpx; display: block; box-sizing: border-box\" data-ib-structured-id=\"14\">\n        <open-data type=\"userAvatarUrl\" data-ib-structured-id=\"15\"></open-data>\n      </view>\n      <open-data type=\"userNickName\" data-ib-structured-id=\"16\"></open-data>\n    </block>\n    <block wx:elif=\"{{!hasUserInfo}}\" data-ib-structured-id=\"17\">\n      <button wx:if=\"{{canIUseGetUserProfile}}\" bindtap=\"getUserProfile\" data-ib-structured-id=\"18\"> 获取头像昵称 </button>\n      <button wx:elif=\"{{canIUse}}\" open-type=\"getUserInfo\" bindgetuserinfo=\"getUserInfo\" data-ib-structured-id=\"19\"> 获取头像昵称 </button>\n      <view wx:else data-ib-structured-id=\"20\"> 请使用1.4.4及以上版本基础库 </view>\n    </block>\n    <block wx:else data-ib-structured-id=\"21\">\n      <image bindtap=\"bindViewTap\" class=\"userinfo-avatar\" src=\"{{userInfo.avatarUrl}}\" mode=\"cover\" data-ib-structured-id=\"22\"></image>\n      <text class=\"userinfo-nickname\" data-ib-structured-id=\"23\">{{userInfo.nickName}}</text>\n    </block>\n  </view>\n  <view class=\"usermotto\" style=\"width: 197rpx; height: 94rpx; display: block; box-sizing: border-box\" data-ib-structured-id=\"24\">\n    <text class=\"user-motto\" data-ib-structured-id=\"25\">{{motto}}</text>\n  </view>\n</view>"
    },
    "cwd": "/mnt/disk1/WeChatProjects/we1",
    "lazyloadConfig": "./pages/index/index>_<6482./pages/logs/logs"
}

const test = async (options, id) => {
    console.log("============")
    try {
        fs.mkdirSync(path.resolve(__dirname, `${id}`))
    } catch (err) {
    }
    process.env.WX_DEBUG_COMPILER_OUTPUT = path.resolve(__dirname, `${id}`)
    console.log(process.env.WX_DEBUG_COMPILER_OUTPUT)
    const wcc = require("wcc_" + MODE).wcc;
    const wcc_result = await wcc(options);
    let result = wcc_result
    if (!!options.lazyloadConfig)
        result = JSON.stringify(wcc_result, null, 4)
    fs.writeFileSync(path.resolve(__dirname, `${id}/wcc_node_${MODE}.txt`), result)
};
(async () => {
    test(wcc_options1, 1);
    test(wcc_options2, 2);
    test(wcc_options3, 3);
    test(wcc_options4, 4);
    test(wcc_options5, 5);
    test(wcc_options6, 6);

    console.log('----template-----')
    await test(wcc_options7, 7);
    // await test(wcc_options8, 8); 有问题
    await test(wcc_options9, 9);    // ok
    await test(wcc_options10, 10); // ok
    await test(wcc_options11, 11);
})()