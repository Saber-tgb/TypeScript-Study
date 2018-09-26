// 相对 vs. 非相对模块导入

// 相对导入是以/，./或../开头的。 下面是一些例子：

// import Entry from "./components/Entry";
// import { DefaultHeaders } from "../constants/http";
// import "/mod";

// 所有其它形式的导入被当作非相对的。 下面是一些例子：
// import * as $ from "jQuery";
// import { Component } from "@angular/core";