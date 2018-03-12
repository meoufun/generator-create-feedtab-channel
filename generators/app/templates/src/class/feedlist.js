/**
 * Copyright (C) <%= createYear %> baidu.com
 * @file
 * class/feedlist.js
 * @author <%= appEmail %>
 * @Data <%= createTime %>
 * @version 1.0.0
 */
import FeedList from 'class/feedlist/feedlist';

console.log('feedlist-<%= appName %>');

export default class <%= channelName %>FeedList extends FeedList {
    constructor(channelId) {
        super(channelId);
    }
}
