import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//引入跟组件

import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';
// 页面配置
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PhotographPage } from '../pages/photograph/photograph';

//打包后app配置启动画面,导航条等
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [//声明组件
    MyApp,
    HomePage,
    ListPage,
    PhotographPage,
    Camera
  ],

  imports: [ //引入需要的模块
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],

  bootstrap: [IonicApp],//启动模块.

  entryComponents: [ //配置不会再模板中使用的组件
    MyApp,
    HomePage,
    ListPage,
    PhotographPage,
    Camera
  ],

  providers: [  //配置服务
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
