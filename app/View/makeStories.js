import React from 'react';

const sampleText = `
Reliance Digital Reliance Digital Reliance Digital Reliance Digital Reliance Digital Reliance Digital Reliance Digital Reliance Digital Reliance Digital Reliance Digital Reliance Digital Reliance Digital Reliance Digital Reliance Digital Reliance Digital Reliance Digital Reliance Digital Reliance Digital Reliance Digital Reliance Digital Reliance Digital Reliance Digital Reliance Digital Reliance Digital Reliance Digital Reliance Digital Reliance Digital Reliance Digital Reliance Digital Reliance Digital Reliance Digital Reliance Digital Reliance Digital Reliance Digital Reliance Digital Reliance Digital Reliance Digital `;

export default(storiesOf, {
  View,
}) =>
  storiesOf('View', module)
    .add('simple', () => (
      <View>
        {sampleText}
      </View>
    ));
