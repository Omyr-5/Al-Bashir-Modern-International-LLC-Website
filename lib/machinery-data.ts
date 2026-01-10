
export interface Machinery {
    id: string;
    name: string;
    category: string;
    image: string;
    description: string;
    features: string[];
    specifications: Record<string, string>;
}

export const machineryData: Machinery[] = [
    {
        id: 'heavy-duty-excavator-x200',
        name: 'Heavy Duty Excavator X200',
        category: 'Excavators',
        image: '/images/machinery/excavator-1.jpg', // Placeholder, user will need to add images
        description: 'The X200 is built for the toughest mining and construction environments. With superior digging force and fuel efficiency, it ensures maximum productivity.',
        features: [
            'High-performance diesel engine',
            'Advanced hydraulic system',
            'Reinforced boom and arm',
            'Ergonomic operator cabin'
        ],
        specifications: {
            'Operating Weight': '22,000 kg',
            'Engine Power': '160 hp',
            'Bucket Capacity': '1.2 m³',
            'Max Digging Depth': '6.5 m'
        }
    },
    {
        id: 'wheel-loader-w500',
        name: 'Wheel Loader W500',
        category: 'Loaders',
        image: '/images/machinery/loader-1.jpg',
        description: 'Designed for versatility and speed, the W500 Wheel Loader handles material moving tasks with ease. Perfect for quarries and large construction sites.',
        features: [
            'High breakout force',
            'Automatic transmission',
            '360-degree visibility',
            'Heavy-duty axles'
        ],
        specifications: {
            'Operating Weight': '18,500 kg',
            'Engine Power': '220 hp',
            'Bucket Capacity': '3.0 m³',
            'Max Speed': '38 km/h'
        }
    },
    {
        id: 'mobile-crane-c100',
        name: 'Mobile Crane C100',
        category: 'Cranes',
        image: '/images/machinery/crane-1.jpg',
        description: 'The C100 Mobile Crane offers exceptional lifting capacity and mobility. Ideal for urban construction projects where space is limited but power is needed.',
        features: [
            'Telescopic boom',
            'Compact chassis design',
            'Intelligent load safety system',
            'Quick setup time'
        ],
        specifications: {
            'Max Lifting Capacity': '50 tons',
            'Boom Length': '40 m',
            'Max Travel Speed': '80 km/h',
            'Counterweight': '6.5 tons'
        }
    },
    {
        id: 'bulldozer-d8',
        name: 'Bulldozer D8',
        category: 'Bulldozers',
        image: '/images/machinery/bulldozer-1.jpg',
        description: 'A powerhouse for earthmoving, the D8 Bulldozer features a rugged design and massive torque to push through the most challenging terrains.',
        features: [
            'Power-angle-tilt blade',
            'Hydrostatic drive system',
            'Heavy-duty undercarriage',
            'GPS grade control ready'
        ],
        specifications: {
            'Operating Weight': '35,000 kg',
            'Engine Power': '320 hp',
            'Blade Capacity': '5.5 m³',
            'Ground Pressure': '0.8 kg/cm²'
        }
    },
    {
        id: 'dump-truck-t40',
        name: 'Articulated Dump Truck T40',
        category: 'Trucks',
        image: '/images/machinery/truck-1.jpg',
        description: 'The T40 Articulated Dump Truck excels in hauling heavy loads over rough terrain. Its flexibility and traction make it indispensable for mining operations.',
        features: [
            '6x6 All-wheel drive',
            'High-strength steel body',
            'Active traction control',
            'Fuel-efficient engine'
        ],
        specifications: {
            'Payload Capacity': '40 tons',
            'Engine Power': '450 hp',
            'Heaped Capacity': '24 m³',
            'Max Speed': '55 km/h'
        }
    },
    {
        id: 'road-roller-r20',
        name: 'Vibratory Road Roller R20',
        category: 'Compactors',
        image: '/images/machinery/roller-1.jpg',
        description: 'Ensure a solid foundation with the R20 Road Roller. It delivers high compaction performance for asphalt and soil, ensuring durable road surfaces.',
        features: [
            'Dual vibration frequencies',
            'Pressurized water sprinkler system',
            'Comfortable operator seat',
            'Excellent drum edge visibility'
        ],
        specifications: {
            'Operating Weight': '12,000 kg',
            'Drum Width': '2100 mm',
            'Vibration Frequency': '30/35 Hz',
            'Engine Power': '130 hp'
        }
    }
];

export function getMachinery(): Machinery[] {
    return machineryData;
}

export function getMachineryById(id: string): Machinery | undefined {
    return machineryData.find((item) => item.id === id);
}
