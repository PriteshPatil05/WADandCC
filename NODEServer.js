const express = require('express');
const app = express();
app.use(express.static('Public'));
const PORT = 3006;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
