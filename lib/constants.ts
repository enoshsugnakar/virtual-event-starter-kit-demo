/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const SITE_URL = 'https://demo.vercel.events';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'vercel';
export const BRAND_NAME = 'RCMY';
export const SITE_NAME_MULTILINE = ['RCMY', 'Fest'];
export const SITE_NAME = 'RCMY Fest';
export const META_DESCRIPTION =
  '';
export const SITE_DESCRIPTION =
  '';
export const DATE = 'August 31, 2022';
export const SHORT_DATE = 'Aug 31 - 8:00am IST';
export const FULL_DATE = 'Oct 31st 8am Indian Time (GMT+5:30)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  '';
export const REPO = 'https://github.com/enoshsugnakar/virtual-event-starter-kit-demo';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  
  {
    name: 'Schedule',
    route: '/schedule'
  },
  {
    name: 'Speakers',
    route: '/speakers'
  },
  
  
];

export type TicketGenerationState = 'default' | 'loading';
