import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'SuccessIcon',
  props: {},
  functional: true,
  render: function render(h, ctx) {
    var attrs = ctx.data.attrs || {};
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24"
      },
      "class": "c-ficon c-ficon--success"
    }, ctx.data]), [h("g", {
      attrs: {
        stroke: "none",
        "stroke-width": "1",
        fill: "none",
        "fill-rule": "evenodd"
      }
    }, [h("g", {
      attrs: {
        transform: "translate(-34.000000, -18.000000)"
      }
    }, [h("g", {
      attrs: {
        transform: "translate(32.000000, 16.000000)"
      }
    }, [h("polygon", {
      attrs: {
        opacity: "0",
        points: "0 28 28 28 28 0 0 0"
      }
    }), h("path", {
      attrs: {
        d: "M24.4463333,8.7815 L13.1763333,20.0515 C12.9436772,20.2846804 12.627813,20.4157239 12.2984167,20.4157239 C11.9690203,20.4157239 11.6531561,20.2846804 11.4205,20.0515 L6.36416667,14.9951667 C5.88241948,14.5112963 5.88241948,13.729037 6.36416667,13.2451667 L6.36416667,13.2451667 C6.59682276,13.0119863 6.91268699,12.8809427 7.24208333,12.8809427 C7.57147968,12.8809427 7.8873439,13.0119863 8.12,13.2451667 L12.2978333,17.423 L23.079,6.64066667 C19.1592286,1.73816426 12.089975,0.756936128 6.98315403,4.40652743 C1.87633305,8.05611872 0.515173157,15.0621446 3.88395558,20.3584115 C7.25273801,25.6546783 14.1751324,27.3918058 19.6454205,24.3136432 C25.1157087,21.2354807 27.2237447,14.4168782 24.4451667,8.7885 L24.4463333,8.7815 Z",
        id: "Color",
        fill: "#017A39"
      }
    })])])])]);
  }
};