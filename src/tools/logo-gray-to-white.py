from PIL import Image

def is_light_gray(rgb, threshold=200):
    r, g, b = rgb
    return r > threshold and g > threshold and b > threshold

def convert_light_gray_to_white(image_path, output_path, threshold=200):
    # Open the image
    image = Image.open(image_path)
    pixels = image.load()

    # Iterate over all pixels
    for i in range(image.width):
        for j in range(image.height):
            if is_light_gray(pixels[i, j], threshold):
                pixels[i, j] = (255, 255, 255)  # Convert to white

    # Save the modified image
    image.save(output_path)
    print(f"Image saved to {output_path}")

# Example usage
input_image_path = 'input.png'
output_image_path = 'output.png'
convert_light_gray_to_white(input_image_path, output_image_path)

