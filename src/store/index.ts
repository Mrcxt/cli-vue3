import { createStore } from "vuex";

/*----------  自动注册modules  ----------*/
function requireModule() {
  const requireComponent = require.context(
    // 其组件目录的相对路径
    "./modules",
    // 是否查询其子目录
    true,
    // 匹配js文件
    /\.js|.ts$/
  );
  // eslint-disable-next-line
  type modulesType = Record<string, any>;
  const modules: modulesType = {};

  requireComponent.keys().forEach((fileName = "") => {
    // 获取配置
    const Module = requireComponent(fileName);

    // 获取命名
    // eslint-disable-next-line
    const moduleName = fileName.split("/").pop()!.split(".").shift() as string;

    modules[moduleName] = Module.default || Module;
  });

  return modules;
}

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: requireModule(),
});
