/* eslint-disable no-console */
const { deploy } = require('sftp-sync-deploy')
require('dotenv').config()

const config = {
  host: process.env.SFTP_HOST,
  port: process.env.SFTP_PORT,
  username: process.env.SFTP_USER,
  password: process.env.SFTP_PASSWORD,
  localDir: 'public',
  remoteDir: 'public_html',
}

const options = {
  concurrency: 50,
}

deploy(config, options).then(() => {
  console.log('success!')
}).catch(err => {
  console.error('error! ', err)
})
