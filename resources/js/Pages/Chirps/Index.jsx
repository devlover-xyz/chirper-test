import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import Chirp from '@/Components/Chirp';

export default function Index({ auth, chirps }) {
    const { data, setData, post, processing, reset, errors, progress } = useForm({
        message: '',
        image: null,
    });

    const submit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', data.image);

        post(route('chirps.store'), {
            data: formData,
            onSuccess: () => reset()
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Chirps" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <div className="w-full mb-2">
                        <textarea
                            value={data.message}
                            placeholder="What's on your mind?"
                            className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            onChange={e => setData('message', e.target.value)}
                        ></textarea>
                        <InputError message={errors.message} className="mt-2" />
                    </div>

                    <div className="w-full">
                        <input type="file" onChange={e => {
                            setData('image', e.target.files[0]);
                            console.log(e.target.files[0]);
                        }} />
                        {progress && (
                            <progress value={progress.percentage} max="100">
                                {progress.percentage}%
                            </progress>
                        )}
                        <InputError message={errors.image} className="mt-2" />
                    </div>

                    <div className="w-full">
                        <PrimaryButton className="mt-4" disabled={processing}>Chirp</PrimaryButton>
                    </div>

                </form>

                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    {chirps.map(chirp =>
                        <Chirp key={chirp.id} chirp={chirp} />
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
