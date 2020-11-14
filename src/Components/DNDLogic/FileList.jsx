import React, { useMemo } from 'react';
function list(files) {
    console.log(files)
    const label = (file) => `'${file.name}' размер '${file.size}' тип '${file.type}'`;
    return files.map((file) => <li key={file.name}>{label(file)}</li>);
}
export const FileList = ({ files }) => {
    const fileList = useMemo(() => list(files), [files]);
    if (files.length === 0) {
        return <div>Nothing to display</div>;
    }
    return <div>{fileList}</div>;
};