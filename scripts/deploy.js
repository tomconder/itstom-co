/* eslint-disable no-console */
const { deploy } = require('sftp-sync-deploy')
require('dotenv').config()

let config = {
  host: process.env.SFTP_HOST,
  port: process.env.SFTP_PORT,
  username: process.env.SFTP_USER,
  password: process.env.SFTP_PASSWORD,
  localDir: 'public',
  remoteDir: 'public_html',
}

deploy(config).then(() => {
  console.log('success!')
}).catch(err => {
  console.error('error! ', err)
})
