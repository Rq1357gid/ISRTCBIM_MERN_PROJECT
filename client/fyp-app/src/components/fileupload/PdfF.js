// import React, { useState } from 'react';
// import { Button, Container, Typography } from '@mui/material';

// function PdfUpload() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [status, setStatus] = useState('');

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!selectedFile) {
//       setStatus('Please select a file.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('pdf', selectedFile);

//     try {
//       const response = await fetch('http://localhost:5000/api/v1/users/uploadpdf', {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       setStatus('PDF uploaded successfully');
//       setSelectedFile(null);
//     } catch (error) {
//       setStatus('Error uploading PDF: ' + error.message);
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Typography variant="h4" align="center" gutterBottom>
//         Upload PDF Notes
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="file"
//           onChange={handleFileChange}
//           accept=".pdf"
//           style={{ display: 'none' }}
//           id="pdf-upload"
//         />
//         <label htmlFor="pdf-upload">
//           <Button component="span" variant="contained" color="primary">
//             Choose PDF
//           </Button>
//         </label>
//         <Button type="submit" variant="contained" color="primary" disabled={!selectedFile}>
//           Upload
//         </Button>
//       </form>
//       {status && <Typography variant="body1">{status}</Typography>}
//     </Container>
//   );
// }

// export default PdfUpload;



import React, { useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';

function PdfUpload() {
  const [formData, setFormData] = useState({
    title: '',
    link: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.title || !formData.link) {
      setStatus('Please fill in all fields.');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/v1/users/uploadpdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setStatus('Video link uploaded successfully');
      setFormData({ title: '', link: '' });
    } catch (error) {
      setStatus('Error uploading video link: ' + error.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Upload Pdf Notes Link
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Title"
          variant="standard"
          name="title"
          value={formData.title}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Link"
          variant="standard"
          name="link"
          value={formData.link}
          onChange={handleChange}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Upload
        </Button>
      </form>
      {status && <Typography variant="body1">{status}</Typography>}
    </Container>
  );
}

export default PdfUpload;
