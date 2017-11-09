//
//  User.m
//  ListViewTest
//
//  Created by ZD on 2017/11/9.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "User.h"

@interface User()<RCTBridgeModule>

@property (copy,nonatomic)NSString *title;

@end

@implementation User

RCT_EXPORT_MODULE()
RCT_EXPORT_METHOD(changeTitle:(NSString *) title){
  self.title = title;
}

-(UIView *)view{
  UIView * v = [[UIView alloc]init];
  v.backgroundColor = [UIColor redColor];
  v.frame = [UIScreen mainScreen].bounds;
  
  UILabel * label = [[UILabel alloc]initWithFrame:[UIScreen mainScreen].bounds];
  label.backgroundColor = [UIColor orangeColor];
  label.text = @"自定义视图：User";
  [v addSubview:label];
  
  //添加一个按钮
  UIButton * btn = [[UIButton alloc]init];
  [btn setTitle:@"我是按钮" forState:(UIControlStateNormal)];
  [btn setTitle:@"我被点击了!" forState:(UIControlStateHighlighted)];
  btn.backgroundColor = [UIColor redColor];
  [btn addTarget:self action:@selector(btnClick) forControlEvents:(UIControlEventTouchUpInside)];
  btn.frame = CGRectMake(100, 100, 150, 150);
  [v addSubview:btn];
  return v;
}

- (void)btnClick{
  UIAlertController *alert = [UIAlertController alertControllerWithTitle:self.title message:@"原生UI控件测试" preferredStyle:(UIAlertControllerStyleAlert)];
  
  [alert addAction:[UIAlertAction actionWithTitle:@"取消" style:(UIAlertActionStyleCancel) handler:nil]];
  [alert addAction:[UIAlertAction actionWithTitle:@"确认" style:(UIAlertActionStyleDefault) handler:nil]];
  
  [[UIApplication sharedApplication].keyWindow.rootViewController presentViewController:alert animated:YES completion:nil];
}

@end
