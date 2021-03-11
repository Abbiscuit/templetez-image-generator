import html2canvas from 'html2canvas';
import { useState } from 'react';

const useHtml2Canvas = () => {
  const [image, setImage] = useState('');

  const printDocument = async targetId => {
    // 画像に変換する component の id を指定
    const target = document.getElementById(targetId);
    const canvas = await html2canvas(target);
    const targetImgUri = canvas.toDataURL('img/png');

    // target.appendChild(canvas);
    saveAsImage(targetImgUri);
  };

  const saveAsImage = async uri => {
    const downloadLink = document.createElement('a');

    if (typeof downloadLink.download === 'string') {
      downloadLink.href = uri;

      // ファイル名
      downloadLink.download = 'component.png';

      // Firefox では body の中にダウンロードリンクがないといけないので一時的に追加
      document.body.appendChild(downloadLink);

      // ダウンロードリンクが設定された a タグをクリック
      downloadLink.click();

      // Firefox 対策で追加したリンクを削除しておく
      document.body.removeChild(downloadLink);
    } else {
      window.open(uri);
    }
  };

  const onClickExport = () => {
    // 画像に変換する component の id を指定
    const target = document.getElementById('capture');
    html2canvas(target).then(canvas => {
      const targetImgUri = canvas.toDataURL('img/png');
      saveAsImage(targetImgUri);
    });
  };

  return {
    printDocument,
    onClickExport,
  };
};

export default useHtml2Canvas;
