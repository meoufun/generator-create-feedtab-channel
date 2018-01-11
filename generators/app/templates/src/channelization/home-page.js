/**
 * Copyright (C) <%= createYear %> baidu.com
 * @file
 * channelization/home-page.js
 * @author <%= appEmail %>
 * @Data <%= createTime %>
 * @version 1.0.0
 */
import channelizedHomePage from 'channelization/home-page/home-page';
import channelization from 'channelization/channelization';

import {
    DOM_PREFIX
} from 'singleton/constant';

console.log('homepage-<%= appName %>');

export default function channelize(channelId) {
    const {
        key,
        act
    } = channelization(channelId);

    const HomePage = channelizedHomePage(channelId);

    class channelHomePage extends HomePage {

    }

    return channelHomePage;
}
