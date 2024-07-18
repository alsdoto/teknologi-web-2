import React, { useState } from 'react';
import Layout from '../../Layout/Default';
import { Inertia } from '@inertiajs/inertia';

export default function CreatePost({ errors }) {

    // define state
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // function "storePost"
    const storePost = async (e) => {
        e.preventDefault();

        Inertia.post('/posts', {
            title: title,
            content: content
        });
    }

    return (
        <Layout>
            <div className="row" style={{ marginTop: '100px' }}>
                <div className="col-12">
                    <div className="card border-0  rounded shadow-sm border-top-succes">
                        <div className="card-header">
                            <span className="font-weight-bold">TAMBAH POST</span>
                        </div>
                        <div className="card-body">
                            <form onSubmit={storePost}>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Title</label>
                                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Masukkan judul Post" />
                                </div>
                                {errors.title && (
                                    <div className="alert alert-danger">
                                        {errors.title}
                                    </div>
                                )}

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Content</label>
                                    <textarea className="form-control" value={content} onChange={(e) => setContent(e.content.value)} placeholder="Masukkan Content" rows={4}>

                                    </textarea>
                                </div>
                                {errors.content && (
                                    <div className="alert alert-danger">
                                        {errors.content}
                                    </div>
                                )}

                                <div>
                                    <button type="submit" className="btn btn-md btn-succes me-2"><i className="fa fa-save"></i>SAVE</button>
                                    <button type="Reset" className="btn btn-md btn-warning"><i className="fa fa-redo"></i>RESET</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}