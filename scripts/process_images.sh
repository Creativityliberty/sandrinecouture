#!/bin/bash

SOURCE_DIR="/Volumes/Numtema/sandrine/sandrinecouture/import_images"
DEST_DIR="/Volumes/Numtema/sandrine/sandrinecouture/public/images/realisations"

set -x
mkdir -p "$DEST_DIR"

count=1
for img in "$SOURCE_DIR"/*.{HEIC,heic,JPG,jpg,jpeg,JPEG,PNG,png}; do
  if [ -e "$img" ]; then
    filename=$(basename -- "$img")
    extension=$(echo "${filename##*.}" | tr '[:upper:]' '[:lower:]')
    output_name="broderie-sandrine-couture-$count.webp"
    
    echo "Processing $filename to $output_name..."
    
    if [ "$extension" == "heic" ]; then
      # Step 1: Convert HEIC to PNG and resize using sips (macOS built-in)
      # --resampleHeightWidthMax 1200 keeps aspect ratio
      sips -s format png "$img" --resampleHeightWidthMax 1200 --out "temp.png" > /dev/null 2>&1
      # Step 2: Convert PNG to WebP using sharp-cli
      npx -y sharp-cli -i "temp.png" -o "$DEST_DIR/$output_name" --format webp
      rm "temp.png"
    else
      # Direct conversion for non-HEIC
      npx -y sharp-cli -i "$img" -o "$DEST_DIR/$output_name" --format webp -- resize 1200
    fi
    
    if [ -f "$DEST_DIR/$output_name" ]; then
      echo "Successfully converted $filename"
    else
      echo "Failed to convert $filename"
    fi
    
    ((count++))
  fi
done

echo "Finished processing $(($count-1)) images."
