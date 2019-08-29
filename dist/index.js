'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "/**\n Docusaurus-like styling for `remarkable-admonitions` blocks\n */\n\n.styles_admonition__1yZsU {\n  margin-bottom: 1em;\n  padding: 15px 30px 15px 15px;\n}\n\n.styles_admonition__1yZsU h5 {\n  margin-top: 0;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n}\n\n.styles_admonition-icon__28BuS {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 0.2em;\n}\n\n.styles_admonition-icon__28BuS svg {\n  display: inline-block;\n  width: 22px;\n  height: 22px;\n  stroke-width: 0;\n}\n\n.styles_admonition-content__tug7k > :last-child {\n  margin-bottom: 0;\n}\n\n/** Customization */\n.styles_admonition-warning__1e7jx {\n  background-color: rgba(230, 126, 34, 0.1);\n  border-left: 8px solid #e67e22;\n}\n\n.styles_admonition-warning__1e7jx h5 {\n  color: #e67e22;\n}\n\n.styles_admonition-warning__1e7jx .styles_admonition-icon__28BuS svg {\n  stroke: #e67e22;\n  fill: #e67e22;\n}\n\n.styles_admonition-tip__1lMEG {\n  background-color: rgba(46, 204, 113, 0.1);\n  border-left: 8px solid #2ecc71;\n}\n\n.styles_admonition-tip__1lMEG h5 {\n  color: #2ecc71;\n}\n\n.styles_admonition-tip__1lMEG .styles_admonition-icon__28BuS svg {\n  stroke: #2ecc71;\n  fill: #2ecc71;\n}\n\n.styles_admonition-caution__1yM6T {\n  background-color: rgba(231, 76, 60, 0.1);\n  border-left: 8px solid #e74c3c;\n}\n\n.styles_admonition-caution__1yM6T h5 {\n  color: #e74c3c;\n}\n\n.styles_admonition-caution__1yM6T .styles_admonition-icon__28BuS svg {\n  stroke: #e74c3c;\n  fill: #e74c3c;\n}\n\n.styles_admonition-important__3bQUu {\n  background-color: rgba(52, 152, 219, 0.1);\n  border-left: 8px solid #3498db;\n}\n\n.styles_admonition-important__3bQUu h5 {\n  color: #3498db;\n}\n\n.styles_admonition-important__3bQUu .styles_admonition-icon__28BuS svg {\n  stroke: #3498db;\n  fill: #3498db;\n}\n\n.styles_admonition-note__1aZA2 {\n  background-color: rgba(241, 196, 15, 0.1);\n  border-left: 8px solid #f1c40f;\n}\n\n.styles_admonition-note__1aZA2 h5 {\n  color: #f1c40f;\n}\n\n.styles_admonition-note__1aZA2 .styles_admonition-icon__28BuS svg {\n  stroke: #f1c40f;\n  fill: #f1c40f;\n}\n";
var styles = { "admonition": "styles_admonition__1yZsU", "admonition-icon": "styles_admonition-icon__28BuS", "admonition-content": "styles_admonition-content__tug7k", "admonition-warning": "styles_admonition-warning__1e7jx", "admonition-tip": "styles_admonition-tip__1lMEG", "admonition-caution": "styles_admonition-caution__1yM6T", "admonition-important": "styles_admonition-important__3bQUu", "admonition-note": "styles_admonition-note__1aZA2" };
styleInject(css);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Admonition = function (_Component) {
  inherits(Admonition, _Component);

  function Admonition() {
    classCallCheck(this, Admonition);
    return possibleConstructorReturn(this, (Admonition.__proto__ || Object.getPrototypeOf(Admonition)).apply(this, arguments));
  }

  createClass(Admonition, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          type = _props.type,
          iconType = _props.iconType,
          title = _props.title,
          children = _props.children;


      return React__default.createElement(
        'div',
        { className: styles.admonition + ' ' + styles['admonition-' + type] },
        React__default.createElement(
          'div',
          { className: styles['admonition-heading'] },
          React__default.createElement(
            'h5',
            null,
            React__default.createElement(
              'div',
              { className: styles['admonition-icon'] },
              returnIcon(type, iconType)
            ),
            ' ',
            title || type
          )
        ),
        React__default.createElement(
          'div',
          { className: 'admonition-content' },
          children
        )
      );
    }
  }]);
  return Admonition;
}(React.Component);

Admonition.propTypes = {
  type: PropTypes.string,
  iconType: PropTypes.string,
  title: PropTypes.string
};


var emojisMap = {
  warning: '⚠️',
  important: '❗️',
  caution: '🔥',
  tip: '💡',
  note: 'ℹ️'

  /**
   * Octicons Icons by GitHub released under MIT License
   * https://github.com/primer/octicons/
   */

};var svgMap = {
  warning: React__default.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '16',
      height: '16',
      viewBox: '0 0 16 16'
    },
    React__default.createElement('path', {
      fillRule: 'evenodd',
      d: 'M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z'
    })
  ),
  important: React__default.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '14',
      height: '16',
      viewBox: '0 0 14 16'
    },
    React__default.createElement('path', {
      fillRule: 'evenodd',
      d: 'M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z'
    })
  ),
  caution: React__default.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '12',
      height: '16',
      viewBox: '0 0 12 16'
    },
    React__default.createElement('path', {
      fillRule: 'evenodd',
      d: 'M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z'
    })
  ),
  tip: React__default.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '12',
      height: '16',
      viewBox: '0 0 12 16'
    },
    React__default.createElement('path', {
      fillRule: 'evenodd',
      d: 'M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z'
    })
  ),
  note: React__default.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '14',
      height: '16',
      viewBox: '0 0 14 16'
    },
    React__default.createElement('path', {
      fillRule: 'evenodd',
      d: 'M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z'
    })
  )
};

function returnIcon(admonition, iconType) {
  if (iconType === 'emoji') {
    return emojisMap[admonition];
  }
  return svgMap[admonition];
}

module.exports = Admonition;
//# sourceMappingURL=index.js.map
