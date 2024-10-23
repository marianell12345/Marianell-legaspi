import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const NameGenerator = () => {
  const [nameType, setNameType] = useState('fantasy');
  const [generatedName, setGeneratedName] = useState('');

  const firstNames = {
    fantasy: ['Aeris', 'Thorne', 'Luna', 'Kai', 'Zephyr', 'Nova', 'Ash', 'Echo', 'Raven', 'Storm'],
    scifi: ['Zenith', 'Neo', 'Cyrus', 'Atlas', 'Nova', 'Orion', 'Vega', 'Pixel', 'Binary', 'Tech'],
    medieval: ['Edmund', 'William', 'Eleanor', 'Margaret', 'Richard', 'Henry', 'Catherine', 'Isabel', 'John', 'Robert']
  };

  const lastNames = {
    fantasy: ['Shadowweaver', 'Lightbringer', 'Moonshard', 'Stormwind', 'Nightwhisper', 'Starweaver', 'Dawnwalker', 'Frostweave', 'Flameheart', 'Dreamweaver'],
    scifi: ['Android', 'Quantum', 'Matrix', 'Vector', 'Cipher', 'Chrome', 'Digital', 'Nexus', 'Binary', 'Cyber'],
    medieval: ['Blackwood', 'Ironsmith', 'Winchester', 'Sheffield', 'Lancaster', 'York', 'Thorne', 'Wellington', 'Crawford', 'Montgomery']
  };

  const generateName = () => {
    const firstName = firstNames[nameType][Math.floor(Math.random() * firstNames[nameType].length)];
    const lastName = lastNames[nameType][Math.floor(Math.random() * lastNames[nameType].length)];
    setGeneratedName(`${firstName} ${lastName}`);
  };

  return (
    <div className="min-h-screen bg-purple-900 p-8 flex items-center justify-center">
      <Card className="w-full max-w-md bg-purple-200 border-purple-600">
        <CardHeader className="border-b border-purple-300">
          <CardTitle className="text-black font-bold text-2xl">Name Generator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-black">Name Type</label>
            <Select value={nameType} onValueChange={setNameType}>
              <SelectTrigger className="bg-purple-100 text-black border-purple-300">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-purple-100 border-purple-300">
                <SelectItem value="fantasy" className="text-black hover:bg-purple-200">Fantasy</SelectItem>
                <SelectItem value="scifi" className="text-black hover:bg-purple-200">Sci-Fi</SelectItem>
                <SelectItem value="medieval" className="text-black hover:bg-purple-200">Medieval</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            onClick={generateName}
            className="w-full bg-purple-500 hover:bg-purple-600 text-black font-bold"
          >
            Generate Name
          </Button>

          {generatedName && (
            <div className="mt-4 p-4 bg-purple-100 rounded-md text-center border border-purple-300">
              <span className="text-xl font-bold text-black">{generatedName}</span>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default NameGenerator;
