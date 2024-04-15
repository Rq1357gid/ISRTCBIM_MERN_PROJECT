// import React, { useState } from 'react';
// import { Button, Container, Typography } from '@mui/material';

// function ImageUpload() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [status, setStatus] = useState('');
//   const [fileName, setFileName] = useState('');

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setSelectedFile(file);
//       setFileName(file.name); // Update the file name for visual feedback
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!selectedFile) {
//       setStatus('Please select a file.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('images', selectedFile);

//     try {
//       const response = await fetch('http://localhost:5000/api/v1/users/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       setStatus('Image uploaded successfully');
//       setSelectedFile(null);
//       setFileName(''); // Reset file name after successful upload
//     } catch (error) {
//       setStatus('Error uploading image: ' + error.message);
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Typography variant="h4" align="center" gutterBottom>
//         Upload Image Notes
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="file"
//           onChange={handleFileChange}
//           accept="image/*"
//           style={{ display: 'none' }}
//           id="image-upload"
//         />
//         <label htmlFor="image-upload">
//           <Button component="span" variant="contained" color="primary">
//             {fileName ? fileName : 'Choose File'}
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

// export default ImageUpload;





import React, { useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';

function ImageUpload() {
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
      const response = await fetch('http://localhost:5000/api/v1/users/upload', {
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
        Upload Image Notes Link
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

export default ImageUpload;
