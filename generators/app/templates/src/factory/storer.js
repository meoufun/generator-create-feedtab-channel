/**
 * Copyright (C) <%= createYear %> baidu.com
 * @file
 * factory/storer.js
 * @author <%= appEmail %>
 * @Data <%= createTime %>
 * @version 1.0.0
 */
import Storer from 'factory/storer/storer';

console.log('storer-<%= appName %>');

export default class <%= channelName %>Storer extends Storer {
    static initialStates = {

    };

    async processResponse(response, fetchParams, addDirection) {

    }
}
