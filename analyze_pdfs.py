import pdfplumber
import os

pdf_files = [
    'Ladakh With Turtuk 2025-6.pdf',
    'Manali - Ladakh - Manalai-3.pdf',
    'Manali leh to Srinagar-4.pdf',
    'RIDE TO HEAVEN(1)-12.pdf',
    'Srinagar Leh Manali-9.pdf',
]

report = []

for pdf_file in pdf_files:
    if os.path.exists(pdf_file):
        print(f"\n{'='*70}")
        print(f"ANALYZING: {pdf_file}")
        print(f"{'='*70}")
        try:
            with pdfplumber.open(pdf_file) as pdf:
                num_pages = len(pdf.pages)
                print(f"Total Pages: {num_pages}")
                
                # Extract all text
                full_text = ""
                for page in pdf.pages:
                    text = page.extract_text()
                    if text:
                        full_text += text + "\n"
                
                print(f"Total Text Length: {len(full_text)} characters")
                print(f"\n--- PREVIEW (First 1000 characters) ---")
                print(full_text[:1000])
                
                report.append({
                    'file': pdf_file,
                    'pages': num_pages,
                    'text_length': len(full_text),
                    'preview': full_text[:500]
                })
                
        except Exception as e:
            print(f"Error analyzing {pdf_file}: {e}")
            report.append({
                'file': pdf_file,
                'error': str(e)
            })
    else:
        print(f"File not found: {pdf_file}")
        report.append({
            'file': pdf_file,
            'error': 'File not found'
        })

# Summary
print(f"\n\n{'='*70}")
print("SUMMARY REPORT")
print(f"{'='*70}")
for item in report:
    if 'error' in item:
        print(f"\n{item['file']}: ERROR - {item['error']}")
    else:
        print(f"\n{item['file']}")
        print(f"  - Pages: {item['pages']}")
        print(f"  - Total Text: {item['text_length']} characters")
