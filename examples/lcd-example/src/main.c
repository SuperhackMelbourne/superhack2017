// Copyright (c) 2014-2017 Cesanta Software Limited
// All rights reserved

#include "mgos.h"
#include "mgos_lcd.h"

enum mgos_app_init_result mgos_app_init() {
  // struct mgos_lcd *lcd = mgos_lcd_create(16, 2, LCD_5x8DOTS);
  // mgos_lcd_set_rgb(lcd, 64, 0, 64); // dim purple yay
  // mgos_lcd_print_string(lcd, "hello, world", 12);
  
  // for (int i = 0; i < 10; i++) {
  //   mgos_lcd_set_cursor(lcd, 0, 1);
  //   mgos_lcd_print_int(lcd, i);
  //   mgos_msleep(1000);
  // }
  
  return MGOS_APP_INIT_SUCCESS;
}
