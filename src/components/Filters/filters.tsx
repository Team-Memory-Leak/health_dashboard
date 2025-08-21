"use client";
import React, { useState, useEffect } from 'react';
import { Drawer } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const races = [
'Asian',
'Black',
'Hispanic',
'White',
'Native American',
'Other',
];

const minAge = 0;
const maxAge = 100;

const FiltersSidebar: React.FC<{ open?: boolean; onClose?: () => void }> = ({
  open = false,
  onClose = () => {},
}) => {
  const [age, setAge] = useState<number[]>([18, 65]);
  const [selectedRaces, setSelectedRaces] = useState<string[]>([]);

  // Reset filters when sidebar closes
  useEffect(() => {
    if (!open) {
      setAge([18, 65]);
      setSelectedRaces([]);
    }
  }, [open]);

  return (
    <Drawer open={open} onClose={onClose}>
      <div className="w-72 p-6 flex flex-col gap-6">
        <h2 className="text-lg font-semibold mb-2">Filters</h2>

        <div>
          <label className="block text-sm font-medium mb-2">Age Range</label>
          <Slider
            value={age}
            onValueChange={setAge}
            min={minAge}
            max={maxAge}
            className="my-2"
          />
          <div className="text-xs text-muted-foreground mt-1">
            {age[0]} - {age[1]}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Race</label>
          <div className="flex flex-col gap-2">
            {races.map((race) => (
              <div key={race} className="flex items-center px-2 py-1">
                <Checkbox
                  checked={selectedRaces.includes(race)}
                  onCheckedChange={(checked) => {
                    setSelectedRaces((prev) =>
                      checked
                        ? [...prev, race]
                        : prev.filter((r) => r !== race)
                    );
                  }}
                  id={`race-${race}`}
                />
                <label htmlFor={`race-${race}`} className="ml-2 text-sm">
                  {race}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          onClick={() => {
            setAge([18, 65]);
            setSelectedRaces([]);
          }}
          className="mt-2"
        >
          Clear Filters
        </Button>
      </div>
    </Drawer>
  );
};

export default FiltersSidebar;