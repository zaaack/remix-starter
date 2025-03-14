import { importClientComp } from "#components/misc/client-comp.js";
import type { MetaFunction } from "@remix-run/node";
import { useEffect } from "react";
export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};
// https://github.com/vantezzen/autoform
// 导出一个默认的React函数组件，命名为Index
export default function Index() {
  useEffect(() => {
    import('./render').then((mod) => {
      mod.renderAdmin();
    })
  },[])
  return (
    <div id="admin-root"></div>
  );
}
