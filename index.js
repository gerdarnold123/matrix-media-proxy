import express from 'express'
import cors from 'cors'
import axios from 'axios'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())

app.get('/matrix-media', async (req, res) => {
  const mediaUrl = req.query.url
  const token = req.headers['x-matrix-access-token']

  if (!mediaUrl || !token) {
    return res.status(400).json({ error: 'Missing media URL or token' })
  }

  try {
    console.log('Proxy request:', { mediaUrl, token: token.slice(0, 8) + '...' })

    const response = await axios.get(mediaUrl, {
      responseType: 'arraybuffer',
      headers: { Authorization: `Bearer ${token}` },
      maxRedirects: 5
    })

    res.set('Content-Type', response.headers['content-type'] || 'application/octet-stream')
    res.send(response.data)
  } catch (err) {
    console.error('Proxy error:', err.message)
    console.error('Status:', err.response?.status)
    res.status(500).json({ error: 'Proxy failed', details: err.message })
  }
})

app.listen(PORT, () => {
  console.log(`Matrix Media Proxy läuft auf Port ${PORT}`)
})
