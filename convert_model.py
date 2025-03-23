import tensorflow as tf
import tensorflowjs as tfjs

# Create the model with the correct architecture
model = tf.keras.Sequential([
    tf.keras.layers.Input(shape=(1939,)),
    tf.keras.layers.Dense(256, activation='relu'),
    tf.keras.layers.BatchNormalization(),
    tf.keras.layers.Dropout(0.3),
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.BatchNormalization(),
    tf.keras.layers.Dropout(0.3),
    tf.keras.layers.Dense(64, activation='relu'),
    tf.keras.layers.BatchNormalization(),
    tf.keras.layers.Dropout(0.3),
    tf.keras.layers.Dense(32, activation='relu'),
    tf.keras.layers.BatchNormalization(),
    tf.keras.layers.Dense(1, activation='sigmoid')
])

# Load the weights
model.load_weights('models/fraud_detection_model.h5')

# Save as TensorFlow.js model
tfjs.converters.save_keras_model(model, 'models/tfjs_model') 