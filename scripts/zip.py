import os
import zipfile

zip_path = 'curtains-direct-web.zip'
if os.path.exists(zip_path):
    os.remove(zip_path)

with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
    # First pass: add all directories explicitly so cPanel creates them as folders
    for root, dirs, files in os.walk('out'):
        for d in dirs:
            full_dir_path = os.path.join(root, d)
            arcname = os.path.relpath(full_dir_path, 'out').replace('\\', '/') + '/'
            dir_info = zipfile.ZipInfo(arcname)
            dir_info.external_attr = 0o755 << 16  # drwxr-xr-x for directories
            zipf.writestr(dir_info, '')

    # Second pass: add all files
    for root, dirs, files in os.walk('out'):
        for file in files:
            full_path = os.path.join(root, file)
            arcname = os.path.relpath(full_path, 'out').replace('\\', '/')
            info = zipfile.ZipInfo(arcname)
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = 0o644 << 16  # -rw-r--r-- for files
            with open(full_path, 'rb') as f:
                zipf.writestr(info, f.read())

size_mb = round(os.path.getsize(zip_path) / 1024 / 1024, 2)
print(f'ZIP created: {zip_path} ({size_mb} MB)')

# Verify chunks folder exists as proper entry
with zipfile.ZipFile(zip_path, 'r') as zf:
    names = zf.namelist()
    chunk_dirs = [n for n in names if 'chunks' in n and n.endswith('/')]
    chunk_files = [n for n in names if '_next/static/chunks/' in n and not n.endswith('/')]
    print(f'Directory entries for chunks: {len(chunk_dirs)}')
    print(f'Files inside chunks: {len(chunk_files)}')
    print(f'Total entries: {len(names)}')
    if chunk_dirs:
        print(f'chunks folder entry: {chunk_dirs[0]}')
