

const inquirer = require('inquirer');
const fs = require('fs');

class Creator {
    constructor() {
        this.options = {
            name: '',
            description: '',
        };
    }

    async init() {
        console.log();
        const answers = await this.ask();
        console.log(answers);
    };

    ask() {
        const prompt = [];

        prompt.push({
            type: 'input',
            name: 'name',
            message: '请输入项目名称',
            validate(input) {
                if (!input) {
                    return '请输入项目名称!';
                }

                if (fs.existsSync(input)) {
                    return '项目名已重复!'
                }

                return true;
            }
        });

        prompt.push({
            type: 'input',
            name: 'description',
            message: '请输入项目描述',
        });

        // 返回promise
        return inquirer.prompt(prompt);

    }
}

module.exports = Creator;