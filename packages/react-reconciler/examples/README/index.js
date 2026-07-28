const Reconciler = require('react-reconciler');

// HostConfig
//      how to make something happen | "host" environment
const HostConfig = {
  // You'll need to implement some methods here.
  createInstance(type, props) {
    // e.g DOM renderer returns a DOM node
  },
  // ...
  supportsMutation: true, // it works by mutating nodes
  appendChild(parent, child) {
    // e.g DOM renderer would call .appendChild() here
  },
  // ...
};

const MyRenderer = Reconciler(HostConfig);

const RendererPublicAPI = {
  render(element, container, callback) {
    // Call MyRenderer.updateContainer() to schedule changes on the roots.
    // See ReactDOM, React Native, or React ART for practical examples.
  }
};

module.exports = RendererPublicAPI;
