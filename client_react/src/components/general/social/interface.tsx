/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: CC BY-NC-ND 4.0
*/

export interface SocialInterface {
  channel: string;
  url: string;
  type?: string; // small, large
  icon?: string;
  text?: string;
  description?: string;
  target?: string;
  className?: string;
  style?: object;
}
