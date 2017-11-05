const { spawn } = require('child_process')

function backquote(str) {
  return '`' + str + '`';
}

exports.add = (...names) => {
  const command = 'apk';
  const args = ['add', '--no-cache', ...names];
  console.log(`- Running ${JSON.stringify([command, ...args])}`);
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {stdio: 'inherit'});
    child.on('end', code => {
      if (code === 0) return resolve();
      return reject(new Error(`Error: process exited with code ${code}`));
    });
  });
}
