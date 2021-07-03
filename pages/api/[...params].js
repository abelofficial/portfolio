import cors from 'cors';
import nc from 'next-connect';

const onError = (err, req, res, next) => {
  console.log(err);
  res.status(500).json({ error: 'An internal error occurred ' });
};

const onNoMatch = (req, res, next) => {
  res.status(404).json({ message: 'The requested endpoint is not supported.' });
};
const handler = nc({ onNoMatch, onError })
  .use(cors())

  .get(async (req, res) => {
    res.status(401).json({
      message: 'Api calls are not available'
    });
  })

  .post(async (req, res) => {
    res.status(401).json({
      message: 'Api calls are not available'
    });
  })

  .put(async (req, res) => {
    res.status(401).json({
      message: 'Api calls are not available'
    });
  })

  .delete(async (req, res) => {
    res.status(401).json({
      message: 'Api calls are not available'
    });
  })
  .patch(async (req, res) => {
    res.status(401).json({
      message: 'Api calls are not available'
    });
  });

export default handler;
