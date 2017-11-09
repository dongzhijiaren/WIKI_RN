//
//  ShareView.m
//  ListViewTest
//
//  Created by ZD on 2017/11/9.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "ShareView.h"

@implementation ShareView


RCT_EXPORT_MODULE()

-(UIView *)view{
  UIView * v = [[UIView alloc]init];
  v.backgroundColor = [UIColor redColor];
  v.frame = [UIScreen mainScreen].bounds;
  
  UILabel * label = [[UILabel alloc]initWithFrame:[UIScreen mainScreen].bounds];
  label.backgroundColor = [UIColor orangeColor];
  label.text = @"这是一个自定义的View";
  [v addSubview:label];
  
  return v;
}

@end
