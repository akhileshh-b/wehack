import tensorflow as tf
import numpy as np

try:
    # Try to load the model
    model = tf.keras.models.load_model('models/fraud_detection_model.h5')
    print("Model loaded successfully!")
    print("\nModel Summary:")
    model.summary()
    
    # Print model configuration
    print("\nModel Config:")
    print(model.get_config())
    
    # Print layer information
    print("\nLayer Information:")
    for layer in model.layers:
        print(f"\nLayer: {layer.name}")
        print(f"Type: {layer.__class__.__name__}")
        print(f"Input Shape: {layer.input_shape}")
        print(f"Output Shape: {layer.output_shape}")
        
except Exception as e:
    print(f"Error loading model: {str(e)}")
    print("\nTrying to load as weights only...")
    try:
        # Try to load as weights only
        model = tf.keras.Sequential([
            tf.keras.layers.Dense(64, activation='relu', input_shape=(12,)),
            tf.keras.layers.Dense(32, activation='relu'),
            tf.keras.layers.Dense(1, activation='sigmoid')
        ])
        model.load_weights('models/fraud_detection_model.h5')
        print("Weights loaded successfully!")
        model.summary()
    except Exception as e2:
        print(f"Error loading weights: {str(e2)}") 