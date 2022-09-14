// 屏幕分辨率兼容方法
export default {
  data() {
      return {
      };
  },
  mounted() {
      this.resize();
      window.onresize = function () {
          this.resize();
      }.bind(this);
  },
  methods: {
      resize() {
          // 系统整体缩放
          let cliWidth = document.documentElement.clientWidth || document.body.clientWidth;
          let cliHeight = document.documentElement.clientHeight || document.body.clientHeight;
          console.log('当前浏览器的宽高', cliWidth, cliHeight)
          let contW = 1920;
          let contH = 1080;
          // let contW = window.screen.availWidth;
          // let contH = window.screen.availHeight;
          console.log('当前屏幕的可用宽高', contW, contH)
          let w = cliWidth / contW
          let h = cliHeight / contH
          console.log('缩放的比例', w, h)
          //你自己抽参数出来 我直接写的
          let appDom = document.getElementById("app")
          // let size = cliWidth / cliHeight
          appDom.style.transform = 'scale(' + w + ',' + h + ')';
          // if (cliWidth === screen.width) {
          //     appDom.style.transform = 'scale(' + w + ',' + h + ')';
          //     appDom.style.marginLeft = 0 + 'px'
          // } else if (size > contW / contH) {
          //     appDom.style.transform = 'scale(' + h + ',' + h + ')';
          //     let main = cliWidth - (appDom.offsetWidth * h);
          //     appDom.style.marginLeft = main / 2 + 'px'
          // } else {
          //     appDom.style.transform = 'scale(' + w + ',' + w + ')';
          //     appDom.style.marginLeft = 0 + 'px'
          // }

          appDom.style.transformOrigin = 'top left'
          appDom.style.width = contW + 'px'
          appDom.style.height = contH + 'px'
          return appDom.offsetHeight;
      }
  },
};

