// Task 3: Facade Pattern (6 minutos)
// Simplifica interfaces complejas.

// ❌ Código sin patrón - uso complejo de múltiples APIs
class VideoConverter {
  convert(filename, format) {
    const file = new FileReader().read(filename);
    const sourceCodec = new CodecFactory().extract(file);

    let destinationCodec;
    if (format === 'mp4') {
      destinationCodec = new MPEG4CompressionCodec();
    } else {
      destinationCodec = new OggCompressionCodec();
    }

    const buffer = new BitrateReader().read(file, sourceCodec);
    const result = new AudioMixer().fix(buffer);
    const finalResult = new VideoEncoder().encode(result, destinationCodec);

    return new FileWriter().write(finalResult, filename, format);
  }
}

// ✅ Facade Pattern - interfaz simplificada
class VideoConversionFacade {
  convertVideo(filename, format) {
    const file = new FileReader().read(filename);
    const sourceCodec = new CodecFactory().extract(file);

    const destinationCodec = format === 'mp4'
      ? new MPEG4CompressionCodec()
      : new OggCompressionCodec();

    const buffer = new BitrateReader().read(file, sourceCodec);
    const result = new AudioMixer().fix(buffer);

    return new VideoEncoder().encode(result, destinationCodec);
  }
}

// Uso simple
const converter = new VideoConversionFacade();
const video = converter.convertVideo('funny-cats.mp4', 'avi');