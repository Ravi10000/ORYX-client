import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone';

export default function PropertyPictures({ selectedImages, setSelectedImages }) {

    const onDrop = useCallback((acceptedFiles) => {
        const newImages = acceptedFiles.map((file) => ({
            id: Math.random().toString(36).substring(7),
            file,
        }));

        setSelectedImages((prevImages) => [...prevImages, ...newImages]);
    }, []);

    const removeImage = (id) => {
        setSelectedImages((prevImages) => prevImages.filter((img) => img.id !== id));
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            'image/png': ['.png'],
            'image/jpeg': ['.jpg', '.jpeg']
        },
        multiple: true,
    });

    return (
        <div>
            <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />

                <div className='flex flex-col gap-1 relative cursor-pointer'>
                    <h5 htmlFor='image' className='font-medium'>Images</h5>
                    <div className='border-2 border-[#eef2f6] bg-[#f7fbff] max-w-80 h-20 flex justify-center items-center outline-primary rounded-lg'>
                        <div className='flex justify-center items-center gap-2 p-2'>
                            <img
                                src='/upload.png'
                                alt='upload'
                                className='w-4 h-4'
                            />
                            <span>Upload Images</span>
                        </div>
                    </div>
                </div>
            </div>
            {selectedImages.length > 0 && (
                <div className='flex flex-row flex-wrap justify-center items-center gap-5 mt-5'>
                    {selectedImages.map((img) => (
                        <div key={img.id}>
                            <div className='flex flex-col gap-2'>
                                <img
                                    src={URL.createObjectURL(img.file)}
                                    alt={`project ${img.id}`}
                                    className='w-28 h-24'
                                />
                                <button
                                    className='w-full text-sm p-1 bg- text-white rounded-lg bg-primary hover:bg-hover'
                                    onClick={() => removeImage(img.id)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
