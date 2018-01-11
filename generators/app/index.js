/**
 * @index.js
 *
 * @authors zhengmeiyu (zhengmeiyu@baidu.com)
 * @date    2018-01-11 20:16:16
 * @version 1.0.0
 */

'use strict';

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const moment = require('moment');
const _ = require('lodash');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.props = {
            APP_NAME_PREFIX: 'feedtab-',
            appName: this.appname,
            appAuthor: this.user.git.name(),
            appEmail: this.user.git.email(),
            createTime: moment().format('YYYY-MM-DD HH:mm:ss'),
            createYear: moment().format('YYYY')
        };
    }

    prompting() {
        this.log(yosay(
            '📻'
        ));

        var prompts = [{
            type: 'input',
            name: 'appName',
            message: '频道名称',
            required: true,
            default: this.props.appName
        }, {
            type: 'input',
            name: 'appAuthor',
            message: '用户名',
            required: true,
            default: this.props.appAuthor
        }, {
            type: 'input',
            name: 'appEmail',
            message: '邮件地址',
            required: true,
            default: this.props.appEmail
        }];

        return this.prompt(prompts).then((props) => {
            this.props = _.merge({}, this.props, props);
        });
    }
    writing() {
        const files = [
            '.editorconfig',
            '.eslintrc.yml',
            '.gitignore',
            '.jsbeautifyrc',
            '.npmrc',
            'ci.yml',
            'package.json',
            'README.md',
            'src',
            'tools'
        ];

        files.forEach((fileName) => {
            this.fs.copyTpl(
                this.templatePath(fileName),
                this.destinationPath(fileName),
                this.props
            );
        });
    }
}