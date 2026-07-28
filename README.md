# React

## Documentation

* [here](https://react.dev/)

## Architecture

```
┌─────────────────────────────┐
│         Your code           │
│    (components, hooks)      │
├─────────────────────────────┤
│          react              │  ← public API
├─────────────────────────────┤
│     react-reconciler        │  ← Fiber (main brain)
├────────────┬────────────────┤
│ scheduler  │   react-dom    │  ← when & where
├────────────┴────────────────┤
│       Navegador (DOM)       │
└─────────────────────────────┘
```

* links
  * [Factory AutoWiki — React Architecture](http://factory.ai/open-source-wikis/react?page=overview/architecture.md)
  * [Andrew Clark's notes](https://github.com/dancer1325/react-fiber-architecture.git)

## Structure

* [React Compiler](compiler)
* React
  * REST of folders
