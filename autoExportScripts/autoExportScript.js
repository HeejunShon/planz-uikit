// external imports
const fs = require('fs');
const path = require('path');

const iconsIndex = './resources/icons/index.ts';

// 파일 쓰기
fs.writeFile(iconsIndex, '', err => {
  if (err) {
    throw err;
  }
  //echo print
  console.log(' 파일 저장 완료!');
});

// 디렉토리 내에 모든 파일목록
fs.readdir(path.join(__dirname, '../resources/icons'), 'utf8', (err, files) => {
  console.log(files);

  const camelCaseSVG = []; // camelCase로 변환된 SVG 컴포넌트
  const dotPrefix = []; // SVG 파일 prefix (camera)
  const dotSuffix = []; // SVG 파일 suffix (.svg)

  // 데이터 파일에 추가 (기록)
  const appendFile = (file, data) => {
    fs.appendFileSync(file, data, err => {
      if (err) {
        throw err;
      }
    });
  };

  // 파일 읽기
  files.forEach((file, index) => {
    dotPrefix.push(file.slice(0, file.indexOf('.')));
    dotSuffix.push(file.slice(file.indexOf('.'), file.length));
    camelCaseSVG.push(camelCase(dotPrefix[index]));

    // import ~
    if (file.slice(file.indexOf('.'), file.length) === '.svg') {
      appendFile(
        iconsIndex,
        `import { ReactComponent as ${camelCaseSVG[index]} } from './${dotPrefix[index]}${dotSuffix[index]}';\n`,
      );
    }
  });

  appendFile(iconsIndex, '\n');

  // export ~
  appendFile(iconsIndex, 'export {\n');
  files.forEach((file, index) =>
    file.slice(file.indexOf('.'), file.length) === '.svg' ? appendFile(iconsIndex, `  ${camelCaseSVG[index]},\n`) : '',
  );
  appendFile(iconsIndex, '};\n\n');

  // export default ~
  appendFile(iconsIndex, 'export default {\n');
  files.forEach((file, index) =>
    file.slice(file.indexOf('.'), file.length) === '.svg' ? appendFile(iconsIndex, `  ${camelCaseSVG[index]},\n`) : '',
  );
  appendFile(iconsIndex, '};\n');
});

// CamelCase converting
const camelCase = (function() {
  const DEFAULT_REGEX = /[-_]+(.)?/g;

  function toUpper(match, group1) {
    return group1 ? group1.toUpperCase() : '';
  }

  return function(str, delimiters) {
    return str.replace(delimiters ? new RegExp(`[${delimiters}]+(.)?`, 'g') : DEFAULT_REGEX, toUpper);
  };
})();
