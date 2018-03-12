/**
 * Copyright (C) <%= createYear %> baidu.com
 * @file
 * channelization/nexter.js
 * @author <%= appEmail %>
 * @Data <%= createTime %>
 * @version 1.0.0
 */
import channelizedNexter from 'channelization/nexter/nexter';

console.log('nexter-<%= appName %>');

export default function channelize(channelId) {
    const Nexter = channelizedNexter(channelId);

    class <%= channelName %>Nexter extends Nexter {

    }

    return <%= channelName %>Nexter;
}
