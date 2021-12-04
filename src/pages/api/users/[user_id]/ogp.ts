import type { NextApiRequest, NextApiResponse } from 'next'
import * as path from 'path'
import { createCanvas, registerFont } from 'canvas';

const createOgp = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {

  const WIDTH = 1200 as const;
  const HEIGHT = 630 as const;
  const DX = 0 as const;
  const DY = 0 as const;
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#FFF';
  ctx.fillRect(DX, DY, WIDTH, HEIGHT);

  registerFont(path.resolve("./_fonts/Noto_Sans_JP/NotoSansJP-Medium.otf"), {
    family: "Noto Sans JP",
  });

  ctx.font = "60px Noto Sans JP";
  ctx.fillStyle = "#000000";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("OGP画像を生成", 600, 300);

  const buffer = canvas.toBuffer();

  res.writeHead(200, {
    'Content-Type': 'image/png',
    'Content-Length': buffer.length,
  });
  res.end(buffer, 'binary');
};

export default createOgp;
